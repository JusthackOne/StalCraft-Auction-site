import { useEffect } from "react";
import { fetchTotal } from "../redux/slices/auction";
import { useAppSelector } from "./../redux";

import { useDispatch } from "react-redux";
import axios from "./../api/apiApp";
import { REGION_URL } from "../utils/constants";

export function useTotalOnAuction(id) {
  const dispatch = useDispatch();
  //   const { data, status } = useAppSelector(search);

  let items = [];

  //   Выполняем запрос
  useEffect(() => {
    async function fetchData() {
      console.log(await axios.get(REGION_URL.RU + '/auction' + `/1k96/lots`));
    }
    fetchData();
  }, []);

  //   if (status === "loaded") {
  //     items = filterSearchItemsByName(name, data); // id, title, icon
  //   }

  //   return { items, status };
}
