import React, { useContext, useEffect, useState } from "react";
import { BookShopContext } from "../../../context";
import BasketCard from "../../BasketCard";
import { FaTelegram } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cart from "../../../assets/img/cart.png";
import { IoCloseCircleOutline } from "react-icons/io5";
import load from "../../../assets/img/load1.png";
import { FcApproval } from "react-icons/fc";
import CountUp from "react-countup";

const Basket = () => {
  const { basket, setBasket, history, setHistory } =
    useContext(BookShopContext);
  console.log(basket);
  const [userName, setUserName] = useState("");
  const [userAdress, setUserAdress] = useState("");
  const [userPhone, setUserPhone] = useState("+996");
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalText, setModalText] = useState(false);
  const [success, setSuccess] = useState(false);

  const btnBasket = basket?.reduce((acc, el) => {
    return acc + +el.price * el.quantity;
  }, 0);

  const errorMessage = (message) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const formSubmit = () => {
    const my_id = `-1002076889796`;
    const token = `7085953685:AAHTT_K1w4wBEHFfsjSzK31al2rUTJMUTZM`;
    const url_api = `https://api.telegram.org/bot${token}/sendMessage`;

    if (
      userName.trim() === "" ||
      userAdress.trim() === "" ||
      userPhone.trim() === ""
    ) {
      errorMessage("Заполните пустые поля!");
    } else {
      let newOrder = {
        chat_id: my_id,
        parse_model: "html",
        text: `order:
        name: ${userName},
        adress: ${userAdress},
        phone: ${userPhone}
        `,
      };
      setTimeout(() => {
        axios.post(url_api, newOrder);
        setLoading(false);
        setSuccess(true);
      }, 2000);
      setLoading(true);
      setModalText(true);
      setUserName("");
      setUserAdress("");
      setUserPhone("+996");
    }
    const num = new Date();
    let newDate = {
      id: 1,
      name: `${userName}`,
      adress: `${userAdress}`,
      hours: num.getHours(),
      time: num.getMinutes(),
      seconds: num.getSeconds(),
      day: num.getDate(),
      mounth: num.getMonth() + 1,
      year: num.getFullYear(),
    };
    localStorage.setItem("history", JSON.stringify([...history, newDate]));
    setHistory([...history, newDate]);
    console.log(history, "his");
  };
  const removeAll = () => {
    localStorage.removeItem("basket");
    setBasket({});
  };
  const openModal = () => {
    if (
      userName.trim() === "" ||
      userAdress.trim() === "" ||
      userPhone.trim() === ""
    ) {
      errorMessage("Заполните пустые поля!");
    } else {
      setModal(true);
    }
  };
  const resetState = () => {
    setLoading(false);
    setModalText(false);
    setSuccess(false);
  };
  useEffect(() => {
    resetState();
  }, [modal]);

  return (
    <div className="container ">
      {basket.length > 0 ? (
        <>
          <div className="flex items-start justify-between mt-[50px] relative">
            <div className="w-[40%]">
              <div className="flex flex-col gap-[20px] overflow-y-scroll h-[450px] w-[730px] mt-[30px]">
                {basket?.map((el, idx) => (
                  <BasketCard el={el} key={idx} />
                ))}
              </div>
              <div className="flex items-center justify-between mt-4">
                <h1 className="text-[40px] font-bold">
                  Итоговая цена:{" "}
                  <CountUp
                    start={0}
                    end={btnBasket}
                    duration={0.7}
                    separator=" "
                  ></CountUp>
                  c
                </h1>

                <button
                  onClick={() => removeAll()}
                  type="button"
                  class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Remove All
                </button>
              </div>
            </div>
            <div className="w-[40%] flex items-start justify-center flex-col gap-6 mt-[20px]">
              <h1 className="text-[30px] text-blue-900 font-bold">
                Оформление заказа:
              </h1>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                  type="text"
                  name="floating_email"
                  id="floating_email"
                  className="block py-3.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue-900 dark:border-gray-600 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-blue-900 peer"
                  placeholder=" "
                />
                <label
                  for="floating_email"
                  className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-900 peer-focus:dark:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  User Name
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  onChange={(e) => setUserAdress(e.target.value)}
                  value={userAdress}
                  type="text"
                  name="floating_email"
                  id="floating_email"
                  className="block py-3.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue-900 dark:border-gray-600 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-blue-900 peer"
                  placeholder=" "
                />
                <label
                  for="floating_email"
                  className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-900 peer-focus:dark:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  User Adress
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  onChange={(e) => setUserPhone(e.target.value)}
                  value={userPhone}
                  type="text"
                  name="floating_email"
                  id="floating_email"
                  className="block py-3.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue-900 dark:border-gray-600 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-blue-900 peer"
                  placeholder=" "
                  maxLength={13}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      openModal();
                    }
                  }}
                />
                <label
                  for="floating_email"
                  className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-900 peer-focus:dark:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  User Phone
                </label>
              </div>
              <h1 className="text-[20px] flex items-center">
                <i>Ваш заказ будет отправлен в телеграмм...</i>
                <FaTelegram />
              </h1>
              <button
                onClick={() => openModal()}
                className="text-[25px] px-[50px] py-[5px] m-auto bg-transparent border-2 border-blue-900 rounded-[10px] text-blue-900 "
              >
                Оформить
              </button>
              <ToastContainer />
            </div>
            {modal ? (
              <div className="w-[600px] z-30 h-[400px] absolute top-[10%] left-[30%]  bg-white shadow-2xl  rounded-[30px] flex items-center justify-center flex-col gap-5 ">
                {!modalText ? (
                  <div className=" flex items-center justify-center flex-col gap-5">
                    <h1 className="text-[30px] text-blue-900 font-bold">
                      Проверьте свои данные:
                    </h1>
                    {userName ? (
                      <h1 className="text-[20px] text-blue-900">
                        {userName}, {userAdress}, {userPhone}
                      </h1>
                    ) : null}
                    <button
                      onClick={() => formSubmit()}
                      className="text-[25px] px-[50px] py-[5px] bg-transparent border-2 border-blue-900 rounded-[10px] text-blue-900 "
                    >
                      Подтвердить
                    </button>
                  </div>
                ) : null}
                {loading ? <img src={load} alt="" width={150} /> : null}
                {success ? (
                  <div className="flex items-center justify-center flex-col text-[170px]">
                    <a className="">
                      <FcApproval />
                    </a>
                    <h1 className="text-[30px] text-blue-900 font-bold">
                      Продукт успешно отпроавлен!
                    </h1>
                  </div>
                ) : null}

                <a
                  onClick={() => setModal(false)}
                  className="text-[35px] absolute top-[20px] right-[20px] cursor-pointer"
                >
                  <IoCloseCircleOutline />
                </a>
              </div>
            ) : null}
            {modal ? (
              <div
                onClick={() => setModal(false)}
                className="bg-[#ffffff1b] absolute w-[100%] h-[80vh] backdrop-blur-sm"
              ></div>
            ) : null}
          </div>
        </>
      ) : (
        <img src={cart} alt="" className="w-full h-[60vh] object-contain" />
      )}
    </div>
  );
};

export default Basket;
