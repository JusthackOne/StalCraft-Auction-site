import React from "react";
import whyWe from "./../assets/images/whyWe.png";

function WhyWe() {
  return (
    <section className="containter flex md:flex-row flex-col items-center md:gap-16 gap-8 sm:py-20 py-10 xl:px-44 lg:px-24 md:px-10 sm:px-10 px-4 bg-light">
      <div className="bg-red rounded-xl">
        <img src={whyWe} alt="Why We" className="sm:-translate-y-5 -translate-y-2 sm:translate-x-5 translate-x-2 transform rounded-xl " />
      </div>

      <div className="flex flex-col gap-4 md:w-2/3 w-full md:items-start items-center">
        <h4 className="lg:text-5xl md:text-4xl sm:text-6xl text-5xl  font-extrabold whitespace-nowrap">Почему мы</h4>
        <p className="xl:text-xl lg:text-md text-sm md:text-left text-center">
          Покачну и по кочерыжке! Мы самые пиздатые, охуенные, современные. Сайт
          сделан для самых пиздатых, если вы нищета ебанная - проходим мимо.
          Ведь для покупки самых пиздатых скинов нужно слить все бабки
          предназначенные для социальных выплат инвалидам 1 и 2 группы и нам ни
          капельки не стыдно! А о том куда девать бабки в нашем тг
        </p>
        <button className="xl:p-4 sm:p-3 p-2 lg:text-md md:text-sm sm:mt-4 mt-2 font-bold  bg-red rounded-full hover:bg-white hover:text-red transition">
          Наша группа в тг
        </button>
      </div>
    </section>
  );
}

export default WhyWe;
