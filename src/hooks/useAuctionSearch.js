import { useEffect } from "react";
import { fetchSearch, search } from "../redux/slices/auction";
import { useAppSelector } from "../redux";

import { useDispatch } from "react-redux";
import { filterSearchItemsByName } from "../utils/filterSearchItemsByName";

export function useAuctionSearch(name) {
  const dispatch = useDispatch();
  const { data, status } = useAppSelector(search);

  let items = [];

  //   Выполняем запрос
  useEffect(() => {
    async function fetchData() {
      console.log(await dispatch(fetchSearch()))
    }
    fetchData();
  }, []);

  if (status === "loaded") {
    items = filterSearchItemsByName(name, data); // id, title, icon
  }

  return { items, status };
}
