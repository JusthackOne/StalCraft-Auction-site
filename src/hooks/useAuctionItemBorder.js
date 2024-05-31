import React, { useEffect, useState } from "react";
import axioGit from "../api/apiGit";
import { REGION_URL } from "../utils/constants";

function useAuctionItemBorder(data) {
    const [result, setResult] = useState('');
  
    useEffect(() => {
      async function getData() {
        const res = await axioGit.get(REGION_URL.RU + data); // Убедитесь, что у вас правильно сконфигурирован axios
        setResult(res.data.color);
      }
      getData();
    }, [data]);
  
    // Теперь result будет обновлён и компонент перерисуется
    return result || 'DEFAULT';
  }

export default useAuctionItemBorder;
