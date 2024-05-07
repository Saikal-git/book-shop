import React, { useContext } from "react";
import logo from "../../assets/img/BOOKShop.png";
import { IoMdCart } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import Signin from "../Signin";
import { BookShopContext } from "../../context";

const Header = () => {
  const { modal, setModal } = useContext(BookShopContext);
  return (
    <div className="bg-[#0a1869] py-[18px] sticky top-0 z-99">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to={"/"}>
            <img src={logo} alt="img" />
          </Link>
          <div className="flex items-center gap-[30px]">
            <div className="relative">
              <input
                type="text"
                placeholder="Search here"
                className="bg-white text-black text-2xl outline-none py-[5px] px-[15px] rounded-[10px] border-none"
              />
              <a className="text-gray-400 text-3xl absolute top-[5px] right-[7px] cursor-pointer">
                <IoIosSearch />
              </a>
            </div>
            <div className="flex items-center justify-center flex-col duration-[0.5s] hover:bg-[#ffffff30] rounded-[7px] p-[10px] cursor-pointer ">
              <a className="text-white text-[26px]">
                <IoMdCart />
              </a>
              <h1 className="text-white text-xl">Корзина</h1>
            </div>
            <div
              onClick={() => setModal(!modal)}
              className="flex items-center justify-center flex-col duration-[0.5s] hover:bg-[#ffffff30] rounded-[7px] p-[10px] cursor-pointer "
            >
              <a className="text-white text-[26px]">
                <FaRegUserCircle />
              </a>
              <h1 className="text-white text-xl">Админ</h1>
            </div>
          </div>
        </div>
        {modal ? (
          <>
            <div className="bg" onClick={() => setModal(false)}></div>
            <Signin />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
