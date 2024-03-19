import React, { useEffect, useState } from "react";
import { PORTION_SIZE } from "../utils/constants";

export function useLoadAuctionItems(initialData, name) {
  const portionSize = PORTION_SIZE;

  const [dataToShow, setDataToShow] = useState(
    initialData.slice(0, portionSize)
  );
  const [offset, setOffset] = useState(portionSize);

  useEffect(() => {
    setOffset(portionSize);
    setDataToShow(initialData.slice(0, portionSize));
    console.log(initialData, name);
  }, [name]);

  useEffect(() => {
    const handleScroll = () => {
      // Если достигли конца страницы, загружаем больше данных
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 500
      ) {
        loadMoreData();
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Очистка слушателя
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dataToShow]); // Зависимость от dataToShow для пересоздания слушателя при изменении данных

  // Функция для подгрузки данных
  const loadMoreData = () => {
    let first = [];
    if (dataToShow.length === 0) {
      first = initialData.slice(0, portionSize);
    }
    const nextOffset = offset + portionSize;
    setDataToShow((prevData) => [
      ...first,
      ...prevData,
      ...initialData.slice(offset, nextOffset),
    ]);
    setOffset(nextOffset);
  };

  if (dataToShow.length === 0) {
    
    return initialData.slice(0, portionSize);
  }
  return dataToShow;
}
