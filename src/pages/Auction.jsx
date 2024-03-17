import React from "react";
import Template from "./Template";




import AuctionItem from "../components/AuctionItem";

function Auction() {
  return (
    <Template>
      <section className="container mx-auto md:pt-36 pt-28 flex flex-col items-center justify-center pb-10">
        <input
          type="text"
          placeholder="Быстрый поиск"
          className="border-solid border-2 border-red text-gray-300 bg-dark p-3 rounded-xl md:w-1/3 w-5/6"
        />
        <div className="gap-8 w-full flex gap-4 mt-16 flex-wrap justify-center xl:px-20 md:px-0 sm:px-32 px-14">
          <AuctionItem />
          <AuctionItem />
          <AuctionItem />
          <AuctionItem />
          <AuctionItem />
          <AuctionItem />
          <AuctionItem />
          <AuctionItem />
        </div>
      </section>
    </Template>
  );
}

export default Auction;
