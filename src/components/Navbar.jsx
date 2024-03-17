import React, { useEffect, useState } from "react";
import logo from "./../assets/images/logo.png";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar({ isOpenModal, toggleModal }) {
  // Состояние для отслеживания, прокрутил ли пользователь страницу
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.pageYOffset > 10;

      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={` w-full py-5 px-7 flex items-center justify-between  border-b-2 border-red md:h-auto h-16 top-0 left-0 ${
        scrolled
          ? "md:bg-darkLight bg-darkBlue fixed z-10"
          : "md:bg-transparent absolute md:border-none"
      }`}
    >
      {/* Navigation links desktop */}
      <div className="flex gap-x-16 justify-center xl:w-1/2 w-4/5 md:flex hidden">
        <img src={logo} alt="" className="w-fit h-auto" />
        <nav className="flex w-1/2">
          <ul className="flex w-full gap-x-10 text-md items-center justify-center">
            <li className="cursor-pointer hover:text-red transition whitespace-nowrap">
              О проекте
            </li>
            <Link to='/auction'>
              <li className="cursor-pointer hover:text-red transition">
                Аукцион
              </li>
            </Link>
            <li className="cursor-pointer hover:text-red transition">
              Избранное
            </li>
          </ul>
        </nav>
      </div>

      {/* Burger menu */}
      <div className="text-2xl md:hidden block z-30" onClick={toggleModal}>
        {isOpenModal ? (
          <IoClose className="text-2xl transition" />
        ) : (
          <TiThMenu className="transition" />
        )}
      </div>

      {/* Search, profile, telegram*/}
      <div className="flex justify-center xl:gap-x-10 gap-x-4 items-center text-xl flex">
        <CiSearch className="xl:text-3xl text-xl cursor-pointer" />
        <a
          href="google.com"
          className="xl:p-3 p-2 text-red rounded-full border-2 border-solid border-red xl:text-xl text-sm hover:text-white hover:border-white transition"
        >
          Телеграмм
        </a>
        <CgProfile className="xl:text-5xl text-4xl cursor-pointer" />
      </div>
    </div>
  );
}

export default Navbar;
