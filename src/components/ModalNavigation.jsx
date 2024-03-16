import React from "react";

function ModalNavigation({ isOpen }) {
  return (
    <div
      className={`rigth-0 top-0 w-screen h-screen bg-dark -z-10 transform md:hidden fixed ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <nav className="flex items-center justify-center w-full h-full">
        <ul className="flex flex-col gap-x-16 text-3xl justify-center w-full gap-y-10 text-md items-center justify-center">
          <li className="cursor-pointer hover:text-red transition whitespace-nowrap">
            О проекте
          </li>
          <li className="cursor-pointer hover:text-red transition">Аукцион</li>
          <li className="cursor-pointer hover:text-red transition">
            Избранное
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ModalNavigation;
