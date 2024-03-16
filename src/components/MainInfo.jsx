import React from "react";
import decorPulse from "./../assets/images/decorPulse.png";
import mainInfo from "./../assets/images/mainInfo.png";

function MainInfo() {
  return (
    <section className="md:py-36 py-28 flex md:flex-row flex-col xl:gap-8 md::gap-2 gap-10 items-center xl:justify-center justify-around xl:px-20 p-8">
      <div className="flex flex-col items-start justify-center md:w-5/12 w-full">
        <h1 className="xl:text-8xl lg:text-7xl text-6xl font-black text-white">
          StalCraft
          <br />
          <span className="xl:text-6xl lg:text-5xl lg:text-4xl font-bold">Auction</span>
        </h1>
        <img src={decorPulse} alt="Pulse" className="mt-4" />
        <h2 className="mt-6 xl:text-md text-sm">
          Самый пиздатый аукцион внутреигровых предметов для <br />
          самых пиздатых криптоинвесторов
        </h2>
        <div className="flex gap-x-5 xl:text-md text-xs items-center mt-8">
          <button className="xl:p-4 p-3 font-bold  bg-red rounded-full hover:bg-white hover:text-red transition">
            Посмотреть аукцион
          </button>
          <button className="xl:p-4 p-3 font-bold   rounded-full border-solid border-2 border-red hover:bg-white hover:text-red transition">
            Создать учётную запись
          </button>
        </div>

        <h3 className="font-extrabold xl:text-xl text-md mt-8">
          Популярные запросы наших любимых <br />
          криптоинвесторов
        </h3>

        <div className="flex gap-2 xl:text-sm text-xs mt-6 flex-wrap">
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
      <img src={mainInfo} alt="Main image" className="xl:w-6/12 md:w-5/12 w-1/2 max-w-2xl" />
    </section>
  );
}

export default MainInfo;
