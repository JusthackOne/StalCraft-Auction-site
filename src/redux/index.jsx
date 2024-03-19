import { configureStore } from "@reduxjs/toolkit";
import auctionReducer from "./slices/auction";

import { useSelector } from "react-redux";

export const store = configureStore({
  reducer: { auctionReducer },
});

export const useAppSelector = useSelector;
