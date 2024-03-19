import React, { useState } from "react";

import { SlBasket } from "react-icons/sl";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

import itemPhoto from "./../assets/images/itemPhoto.png";
import { useTotalOnAuction } from "../hooks/useTotalOnAuction";

function AuctionItem({ title, icon, id }) {
  const [isLiked, setIsLiked] = useState(false);

  const total = useTotalOnAuction(id)


  return (
    <div className="sm:gap-10 gap-4 flex flex-col lg:w-1/5 md:w-1/4 w-full border-solid border-2 border-red rounded-xl p-5 bg-light transition">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <SlBasket />
            <p className="whitespace-nowrap"> +999</p>
          </div>

          <p className="">От 20.32К ₽</p>
        </div>
        <div onClick={() => setIsLiked(!isLiked)}>
          {isLiked ? (
            <MdOutlineFavorite className="text-4xl text-white transition" />
          ) : (
            <MdOutlineFavoriteBorder className="text-4xl text-white transition" />
          )}
        </div>
      </div>

      <img
        src={process.env.REACT_APP_API_GIT_URL + '/ru' +icon}
        alt=""
        className="w-1/2   self-center"
      />

      <p>{title}</p>
    </div>
  );
}

export default AuctionItem;
