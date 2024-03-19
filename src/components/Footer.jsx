import React from "react";

import { FaLongArrowAltRight } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";

import logo from "./../assets/images/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="pt-5 xl:px-44 lg:p-10 p-5 flex flex-col items-between justify-center pb-5 bg-darkBlue-900 w-full">
      <div className="flex md:flex-row flex-col md:items-center items-stretch justify-between gap-10">
        <div className="flex flex-col gap-5 md:items-start items-center">
          <img src={logo} alt="Logo" className="md:w-auto sm:w-64 w-32" />
          <h6 className="font-bold md:text-md sm:text-2xl ">
            scsstats@gmail.com
          </h6>
        </div>

        <div className="flex flex-col md:items-start items-center gap-5 lg:w-1/5 lg:-ml-20">
          <h6 className="md:text-lg font-bold sm:text-2xl text-xl">
            Quick Links
          </h6>
          <div className="flex md:gap-5 sm:gap-20 gap-10 md:justify-between justify-center lg:text-md md:text-sm sm:text-xl text-md">
            <div className="flex flex-col gap-2 ">
              <Link to="/" className="hover:text-red transition cursor-pointer">
                О проекте
              </Link>
              <Link
                to="/auction"
                className="hover:text-red transition cursor-pointer"
              >
                Аукцион
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <a className="hover:text-red transition cursor-pointer">
                Личный кабинет
              </a>
              <a className="hover:text-red transition cursor-pointer">
                Избранное
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 md:items-start items-center">
          <h6 className="md:text-lg font-bold sm:text-2xl text-xl">Subcribe</h6>
          <div className="relative md:w-auto sm:w-2/3 w-full">
            <input
              type="text"
              className="bg-white rounded-xl sm:p-4 p-2 text-gray w-full"
              placeholder="Get info from us"
            />

            <button className="absolute right-0 top-0  h-full w-12 flex items-center justify-center bg-darkBlue hover:bg-red transition rounded-r-xl">
              <FaLongArrowAltRight className="text-white font-md z-10 w-5" />
            </button>
          </div>
        </div>
      </div>

      <hr className="bg-gray h-[1px] sm:mt-16 mt-10" />

      <div className="grid gap-5 sm:grid-cols-3 grid-cols-1 mt-6 items-center">
        <div className="flex sm:justify-start justify-center gap-5">
          <FaTelegramPlane className="p-2 rounded-full border-2 border-solid border-white w-10 hover:bg-red hover:border-red transition" />

          <SlSocialVkontakte className="p-2 rounded-full border-2 border-solid border-white w-10 hover:bg-red hover:border-red transition" />
        </div>

        <div className="flex gap-2 items-center justify-center">
          <p>A product of</p>
          <img src={logo} alt="Logo" className="w-20" />
        </div>

        <p className="sm:text-right text-center">
          © 2024 SCSStats. All rights reserved
        </p>
      </div>
    </section>
  );
}

export default Footer;
