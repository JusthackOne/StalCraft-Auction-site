import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosGIT from "../../api/apiGit";
import axiosApp from "../../api/apiApp";
import { API_URL, REGION_URL } from "../../utils/constants";

export const fetchSearch = createAsyncThunk(
  'auction/fetchSearch"',
  async () => {
    const { data } = await axiosGIT.get(REGION_URL.RU + API_URL.SEARCH);
    return data;
  }
);

export const fetchTotal = createAsyncThunk(
  'auction/fetchTotal"',
  async (item) => {
    const { data } = await axiosApp.get(
      REGION_URL.RU + "/auction" + `/${item}/lots`
    );
    return data;
  }
);

const initialState = {
  search: { data: null, status: "loading" },
  total: {},
};

const auctionSlice = createSlice({
  name: "auction",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.search.status = "loading";
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.search.status = "loaded";

        state.search.data = action.payload;
      })
      .addCase(fetchSearch.rejected, (state) => {
        state.search.status = "error";
      });

    // .addCase(fetchTotal.pending, (state) => {
    //   state.search.status = "loading";
    // })
    // .addCase(fetchTotal.fulfilled, (state, action) => {
    //   state.search.status = "loaded";

    //   state.search.data = action.payload;
    // })
    // .addCase(fetchTotal.rejected, (state) => {
    //   state.search.status = "error";
    // });
  },
});

export const search = (state) => state.auctionReducer.search;

export default auctionSlice.reducer;

// export const { logout } = authSlice.actions;
