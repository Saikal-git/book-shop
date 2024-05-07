import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import { BookShopContext } from "../../context";
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const [typeInput, setTypeInput] = useState(false);
  const { modal, setModal } = useContext(BookShopContext);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const messageError = () =>
    toast.error("Неверный пароль!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const navCreate = () => {
    if (inputValue === "12345") {
      navigate(`/createProduct`);
      setModal(false);
    } else {
      messageError();
    }
  };
  return (
    <div className="w-[700px] absolute top-[150px] left-[350px] h-[350px] rounded-[10px] bg-white  flex items-center justify-center flex-col gap-[30px]">
      <div className="relative">
        <input
          type={typeInput ? "text" : "password"}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          placeholder="Password..."
          className="bg-transparent text-blue-900 placeholder-blue-900 text-[30px] py-[7px] px-[40px] outline-none border-2 border-blue-900"
        />
        <a
          onClick={() => setTypeInput(!typeInput)}
          className="absolute top-[15px] right-[20px] text-[30px] text-blue-900"
        >
          {!typeInput ? <IoEyeSharp /> : <BsEyeSlashFill />}
        </a>
      </div>
      <button
        onClick={() => {
          navCreate();
        }}
        className="text-[24px] bg-blue-900 text-white py-[5px] px-[80px] rounded-[10px] "
      >
        SIGN IN
      </button>
      <a
        onClick={() => setModal(false)}
        className="absolute top-[10px] right-[10px] text-3xl text-blue-900"
      >
        <IoCloseCircleOutline />
      </a>
      <ToastContainer />
    </div>
  );
};

export default Signin;
