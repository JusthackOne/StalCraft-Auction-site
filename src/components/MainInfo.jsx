import React from "react";
import decorPulse from "./../assets/images/decorPulse.png";
import mainInfo from "./../assets/images/mainInfo.png";

function MainInfo() {
  return (
    <section className="container mx-auto md:pt-36 pb-10 pt-28 flex md:flex-row flex-col xl:gap-8 md:gap-2 gap-10 items-center xl:justify-center justify-around xl:px-20 sm:px-10 p-2">
      <div className="flex flex-col md:items-start items-center justify-center md:w-5/12 w-full">
        <h1 className="xl:text-8xl lg:text-7xl md:text-6xl sm:text-7xl text-6xl font-black text-white md:text-left text-center md:whitespace-normal whitespace-nowrap">
          StalCraft
          <br className="md:block sm:hidden block" />
          <span className="xl:text-6xl lg:text-5xl md:text-4xl font-bold">
            {" "}
            Auction
          </span>
        </h1>
        <img src={decorPulse} alt="Pulse" className="md:mt-4 mt-8 w-2/3" />
        <img
          src={mainInfo}
          alt="Main image"
          className="sm:w-2/3 w-96  mt-10  md:hidden block"
        />
        <h2 className="mt-6 xl:text-md md:text-sm text-md md:text-left text-center">
          Самый пиздатый аукцион внутреигровых предметов для{" "}
          <br className="md:block hidden" />
          самых пиздатых криптоинвесторов
        </h2>
        <div className="flex sm:flex-row flex-col gap-5 xl:text-md md:text-xs sm:text-sm sm:items-center items-stretch mt-8">
          <button className="xl:p-4 sm:p-3 p-2 font-bold  bg-red rounded-full hover:bg-white hover:text-red transition">
            Посмотреть аукцион
          </button>
          <button className="xl:p-4 sm:p-3 p-2 font-bold   rounded-full border-solid border-2 border-red hover:bg-white hover:text-red transition">
            Создать учётную запись
          </button>
        </div>
        <h3 className="font-extrabold xl:text-xl md:text-sm text-xl mt-8 md:text-left text-center md:whitespace-normal sm:whitespace-nowrap whitespace-normal">
          Популярные запросы наших любимых <br className="md:block hidden" />
          криптоинвесторов
        </h3>
        <div className="flex gap-2 xl:text-sm text-xs mt-6 flex-wrap md:justify-start justify-center">
          <a className="px-2 py-1 font-bold cursor-pointer  rounded-xl border-solid border-2 border-gray-300 hover:bg-red hover:text-white hover:border-transparent transition">
            Все
          </a>
          <a className="px-2 py-1 font-bold cursor-pointer  rounded-xl border-solid border-2 border-gray-300 hover:bg-red hover:text-white hover:border-transparent transition">
            Артефакты
          </a>
          <a className="px-2 py-1 font-bold cursor-pointer  rounded-xl border-solid border-2 border-gray-300 hover:bg-red hover:text-white hover:border-transparent transition">
            Оружие
          </a>
          <a className="px-2 py-1 font-bold cursor-pointer  rounded-xl border-solid border-2 border-gray-300 hover:bg-red hover:text-white hover:border-transparent transition">
            Снаряжение
          </a>
          <a className="px-2 py-1 font-bold cursor-pointer  rounded-xl border-solid border-2 border-gray-300 hover:bg-red hover:text-white hover:border-transparent transition">
            Магазин для оружия
          </a>
          <a className="px-2 py-1 font-bold cursor-pointer  rounded-xl border-solid border-2 border-gray-300 hover:bg-red hover:text-white hover:border-transparent transition">
            Инструменты
          </a>
        </div>
        
      </div>
      <img
        src={mainInfo}
        alt="Main image"
        className="xl:w-6/12 md:w-5/12 w-1/2 max-w-2xl md:block hidden"
      />
    </section>
  );
}

export default MainInfo;
