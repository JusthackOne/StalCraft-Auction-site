import React, { useEffect, useState } from "react";
import Template from "./Template";
import { BsCalendarDateFill, BsFillQuestionCircleFill } from "react-icons/bs";
import {
  IoIosPricetag,
  IoMdArrowDropdownCircle,
  IoMdCart,
} from "react-icons/io";
import { TbReportMoney } from "react-icons/tb";
import { FaHistory, FaMoneyBillWave } from "react-icons/fa";
import { RiArrowDownCircleFill, RiArrowUpCircleFill } from "react-icons/ri";
import { BiMoneyWithdraw } from "react-icons/bi";
import { IoPricetags, IoTimeSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";

function Item() {
  const { id } = useParams();
  const [qualityIsOpen, setQualityIsOpen] = useState(false);
  const [quality, setQuality] = useState([]);
  const [sortingIsOpen, setSortingIsOpen] = useState(false);
  const [sorting, setSorting] = useState("createTime");

  const [isIncrease, setIsIncrease] = useState(false);

  const [items, setItems] = useState([1, 2, 3, 4, 5]);
  const [itemIndex, setItemIndex] = useState(null);
  const [item, setItem] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const url = `https://eapi.stalcraft.net/ru/auction/y1q9/lots`;
  //     const response = await fetch(url, {
  //       method: "GET",
  //       mode: "no-cors",
  //       headers: {
  //         Authorization:
  //           "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0MjYiLCJqdGkiOiJlMzE5Njc4YTY2NzJjM2U1OGQ3NzFmNjRmOGYyMmEyMzUxMTE4YzAwY2E2OWJkYTY0NDJhYjlkMjBiZmNhNzBiNzMwN2VhZDEyYzBjMDZiOSIsImlhdCI6MTcxNzE2MTE5OS43MTUyMzcsIm5iZiI6MTcxNzE2MTE5OS43MTUyMzksImV4cCI6MTc0ODY5NzE5OS4zNzYxNTUsInN1YiI6IiIsInNjb3BlcyI6W119.n7rDu9_2aR2gQ4cYYz-E-hUjEQPkV7HMunyXiFqAy6ScNqeme9IlzsFls9R8DpRHgK8g-BAZH_zsHt9d_GIp31rtukcokRCaEIGQpmSzCCUkl1opzVJOcrR2u0zqsvsXxwW39G6fm50N4c1dZZGpX1LojpLI5uR3pwgp3_jNempd2e6_IhL_CRa4qjjGunLr_f6PRiJiDIhwsRUKwYtZjk7GyGrkS1C444Otmvh9hl_MF3TISHEf-3xZyl8riUimEcd8pSayox_QYj7Q8u_edNtczCMuvfbYPwmKtqWP3tPJ5U-rZgBsOAuqOBoFc-E3ATT3craMrCo6aqYO0LqOUIhv2g5TOAQnDsrv117I9dT-AobnNC4D-Tq_33-eORL1Z29poOfnfkWcrTj2W3_-JcgQXEzKX0mzeVGKP2cmWv3XNErmjvBDSFA6J_9owYGBeabh1-0p-KadFXzcsl8qynldnSsg_465qn9J_13oh-nOVDtvtDV3Da13BGdbV7-xCJgORYaTtZ1axFeiYxDM-4tNXIaDhtEctWbtW8GJP3BaTX3OOov5B-dZzHt8d_ondGMgfXhR-AuK_C-OTRo1_ZYonknCs-2mVi9M2GNUYVb9r4PURjwKnjHQxGRmXzqXVzPsRY8ZZQdTyVFV6jrLcQ7nHeBZkNGAchPyMXKdcaM",
  //         "Content-Type": "application/x-www-form-urlencoded",
  //       },
  //       // body: JSON.stringify({
  //       //   user_uid: user?.uid || "faaa7334-8c7b-4cec-94bc-a4ed9820ab34",
  //       // }),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     setItems(await response.json());
  //     console.log(items);
  //   };

  //   fetchData();
  // }, []);

  const searchIds = (items) => {
    let target;
    for (let i = 0; i < items.length; i++) {
      if (items[i].data.includes(id)) {
        target = i;
        break;
      }
    }
    return target;
  };

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://raw.githubusercontent.com/EXBO-Studio/stalcraft-database/main/ru/listing.json`;
      const response = await fetch(url, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const items = await response.json();
      setItems(items);
      setItemIndex(searchIds(items));
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!itemIndex) {
      return;
    }
    const fetchData = async () => {
      const url = `https://raw.githubusercontent.com/EXBO-Studio/stalcraft-database/main/ru${items[itemIndex]?.data}`;
      const response = await fetch(url, {
        method: "GET",
      });

      setItem(await response.json());
    };

    fetchData();
  }, [itemIndex]);

  return (
    <Template>
      <section className="container mx-auto pt-28 flex justify-center">
        <div className="flex  gap-12 w-5/6 ">
          <img
            src={`https://raw.githubusercontent.com/EXBO-Studio/stalcraft-database/main/ru${items[itemIndex]?.icon}`}
            alt=""
            className="max-h-80 h-full"
          />
          <div className="flex w-full gap-2">
            <div className="flex flex-col w-3/5">
              <h1 className="flex items-center gap-3 text-3xl font-semibold">
                {item?.name.lines.ru}
                <BsFillQuestionCircleFill className="text-xl" />
              </h1>
              {/* <h2 className="text-xl mt-3">Электрофизические</h2> */}
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
              </div>
              <div className="flex flex-col rounded-3xl border border-1 border-red-20 w-full mt-2 h-40 overflow-y-auto relative pb-3 no-scroll no-style-scroll">
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
          {items.map((item) => (
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
          ))}
        </div>
      </section>
    </Template>
  );
}

export default Item;
