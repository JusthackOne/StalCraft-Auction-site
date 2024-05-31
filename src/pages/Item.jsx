import React, { useState } from "react";
import Template from "./Template";
import { BsCalendarDateFill, BsFillQuestionCircleFill } from "react-icons/bs";
import {
  IoIosPricetag,
  IoMdArrowDropdownCircle,
  IoMdCart
} from "react-icons/io";
import { TbReportMoney } from "react-icons/tb";
import { FaHistory, FaMoneyBillWave } from "react-icons/fa";
import { RiArrowDownCircleFill, RiArrowUpCircleFill } from "react-icons/ri";
import { BiMoneyWithdraw } from "react-icons/bi";
import { IoPricetags, IoTimeSharp } from "react-icons/io5";

function Item() {
  const [qualityIsOpen, setQualityIsOpen] = useState(false);
  const [quality, setQuality] = useState([]);
  const [sortingIsOpen, setSortingIsOpen] = useState(false);
  const [sorting, setSorting] = useState("createTime");

  const [isIncrease, setIsIncrease] = useState(false);

  return (
    <Template>
      <section className="container mx-auto pt-28 flex justify-center">
        <div className="flex  gap-12 w-5/6 ">
          <img
            src="https://github.com/EXBO-Studio/stalcraft-database/blob/main/ru/icons/containers/0ndk.png?raw=true"
            alt=""
            className="max-h-80 h-full"
          />
          <div className="flex w-full gap-2">
            <div className="flex flex-col w-3/5">
              <h1 className="flex items-center gap-3 text-5xl font-semibold">
                Осколок <BsFillQuestionCircleFill className="text-xl" />
              </h1>
              <h2 className="text-xl mt-3">Электрофизические</h2>
              <div className="flex gap-2 flex-wrap mt-4">
                <div className="flex flex justify-center items-center gap-1 rounded-full p-2 border border-1 border-red-20 text-sm ">
                  <IoMdCart className="text-xl" />
                  <p>151</p>
                  <p>На аукционе</p>
                </div>
                <div className="flex flex justify-center items-center gap-1 rounded-full p-2 border border-1 border-red-20 text-sm ">
                  <TbReportMoney className="text-xl" />
                  <p>1 848 975,50 ₽</p>
                  <p>Средняя цена</p>
                </div>
                {/* <div className="flex flex justify-center items-center gap-1 rounded-full p-2 border border-1 border-red-20 text-sm ">
                <IoIosPricetag className="text-xl" />
                <p>45 000,00 ₽</p>
                <p>Минимальная цена</p>
              </div> */}
              </div>
              <div className="text-5xl mt-6 font-bold">От 45 000,00 ₽</div>
            </div>
            <div className="flex flex-col w-2/5">
              <div className="text-xl flex gap-2 font-light">
                <FaHistory />
                История покупок
              </div>
              <div className="flex flex-col rounded-3xl border border-1 border-red-20 w-full mt-2 h-40 overflow-y-auto relative pb-3 no-scroll">
                <div className="flex justify-between items-center px-10 py-2 text-sm sticky top-0 bg-darkLight w-100">
                  <p>
                    <b className="flex gap-3">
                      <BsCalendarDateFill /> Дата
                    </b>
                  </p>
                  <p>
                    <b className="flex gap-3">
                      <FaMoneyBillWave />
                      Цена
                    </b>
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center px-10 py-1 text-sm">
                    <p className="flex gap-3">18.05.2024, 17:55:44</p>
                    <p className="flex gap-3">48 000,00 ₽</p>
                  </div>
                  <div className="flex justify-between items-center px-10 py-1 text-sm">
                    <p className="flex gap-3">18.05.2024, 17:55:44</p>
                    <p className="flex gap-3">48 000,00 ₽</p>
                  </div>
                  <div className="flex justify-between items-center px-10 py-1 text-sm">
                    <p className="flex gap-3">18.05.2024, 17:55:44</p>
                    <p className="flex gap-3">48 000,00 ₽</p>
                  </div>
                  <div className="flex justify-between items-center px-10 py-1 text-sm">
                    <p className="flex gap-3">18.05.2024, 17:55:44</p>
                    <p className="flex gap-3">48 000,00 ₽</p>
                  </div>
                  <div className="flex justify-between items-center px-10 py-1 text-sm">
                    <p className="flex gap-3">18.05.2024, 17:55:44</p>
                    <p className="flex gap-3">48 000,00 ₽</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto flex flex-col justify-center mt-10 w-full">
        <div className="flex justify-between items-center  ">
          <div className="flex flex-wrap items-cente  gap-2">
            <div className="relative">
              <button
                onClick={() => setQualityIsOpen(!qualityIsOpen)}
                className={
                  "p-2  rounded-full flex items-center gap-2  border border-1 border-red-20  font-bold hover:bg-darkBlue hover:text-white transition easy-in-out " +
                  (qualityIsOpen
                    ? "bg-darkBlue text-white"
                    : "bg-gray text-dark")
                }
              >
                Качество <IoMdArrowDropdownCircle className="" />
              </button>

              <ul
                className={
                  (qualityIsOpen ? "block " : "hidden ") +
                  "absolute w-auto  left-0 transition easy-in-out border border-1 border-red-20 p-3 rounded-xl"
                }
                style={{ top: "110%" }}
              >
                <li className="flex gap-1 hover:bg-darkLight p-1 transition easy-in-out "></li>
                <li className="flex gap-1 hover:bg-darkLight p-1 transition easy-in-out ">
                  <input type="checkbox" id="item1" />

                  <label for="item1">Необычный</label>
                </li>
                <li className="flex gap-1 hover:bg-darkLight p-1 transition easy-in-out ">
                  <input type="checkbox" id="item1" />

                  <label for="item1">Особый</label>
                </li>
                <li className="flex gap-1 hover:bg-darkLight p-1 transition easy-in-out ">
                  <input type="checkbox" id="item1" />

                  <label for="item1">Редкий</label>
                </li>
                <li className="flex gap-1 hover:bg-darkLight p-1 transition easy-in-out ">
                  <input type="checkbox" id="item1" />

                  <label for="item1">Исключительный</label>
                </li>
                <li className="flex gap-1 hover:bg-darkLight p-1 transition easy-in-out ">
                  <input type="checkbox" id="item1" />

                  <label for="item1">Легендальный</label>
                </li>
              </ul>
            </div>
            <button className="p-2 bg-gray rounded-full flex items-center gap-2  border border-1 border-red-20 text-dark font-bold hover:bg-darkBlue hover:text-white transition easy-in-out">
              Сортировка <IoMdArrowDropdownCircle className="" />
            </button>
          </div>
          <div>
            {isIncrease ? (
              <RiArrowUpCircleFill
                className="text-5xl text-white transform transition ease-in-out hover:scale-125 cursor-pointer"
                onClick={() => setIsIncrease(!isIncrease)}
              />
            ) : (
              <RiArrowDownCircleFill
                className="text-5xl text-white transform transition ease-in-out hover:scale-125 cursor-pointer"
                onClick={() => setIsIncrease(!isIncrease)}
              />
            )}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-10">
          <div className="flex flex-col items-center w-1/5 p-5 rounded-2xl border border-1 border-red-20">
            <div className="flex justify-between w-4/5">
              <div className="flex flex-col">
                <h6 className="text-xl">Осколок</h6>
                <p className="text-sm text-gray">Количество: 1</p>
              </div>
              <p className="flex items-center gap-1 mt-2">
                <IoTimeSharp />
                46:09:42
              </p>
            </div>
            <p className="flex items-center gap-1 mt-2">
              <BiMoneyWithdraw />
              Цена ставки: 300 000,00 ₽
            </p>
            <p className="flex items-center gap-1">
              <IoPricetags />
              Цена выкупа: 310 000,00 ₽
            </p>
          </div>
        </div>
      </section>
    </Template>
  );
}

export default Item;
