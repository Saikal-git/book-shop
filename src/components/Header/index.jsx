import React, { useContext, useState } from "react";
import logo from "../../assets/img/BOOKShop.png";
import { IoMdCart } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Signin from "../Signin";
import { BookShopContext } from "../../context";
import { MdAccessTime } from "react-icons/md";

const Header = () => {
  const { modal, setModal, admin, setAdmin, basket, cart, history } =
    useContext(BookShopContext);
  const nav = useNavigate();
  const [search, setSearch] = useState("");
  // console.log(admin);
  // const admin1 = JSON.parse(localStorage.getItem("admin")) || [];

  const getSearch = (e) => {
    if (e.key === "Enter") {
      nav(`/search/${search}`);
      setSearch("");
    }
  };
  return (
    <div id="header">
      <div className="bg-[#0a1869] py-[18px] sticky top-0 z-99">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link
              to={"/"}
              onClick={() => {
                setAdmin(true);
                localStorage.setItem("admin", JSON.stringify(true));
              }}
            >
              <img src={logo} alt="img" />
            </Link>
            <div className="flex items-center gap-[30px]">
              <div className="relative">
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => getSearch(e)}
                  type="text"
                  placeholder="Search here"
                  className="bg-white text-black text-2xl outline-none py-[5px] px-[15px] rounded-[10px] border-none"
                />
                <a className="text-gray-400 text-3xl absolute top-[5px] right-[7px] cursor-pointer">
                  <IoIosSearch />
                </a>
              </div>

              {basket.length ? (
                <h1
                  style={{
                    position: "absolute",
                    marginTop: "-50px",
                    marginLeft: "390px",
                    width: "20px",
                    height: "20px",
                    background: "red",
                    borderRadius: "50%",
                    color: "white",
                    fontSize: "14px",
                    textAlign: "center",
                  }}
                >
                  {basket.length}
                </h1>
              ) : null}

              <div
                style={{
                  transform: cart ? "translateY(-15px)" : "translateY(0px)",
                }}
                className="flex items-center justify-center flex-col duration-[0.5s] hover:bg-[#ffffff30] rounded-[7px] p-[10px] cursor-pointer "
              >
                <Link
                  to={`/basket`}
                  style={{
                    color: cart ? "red" : "white",
                  }}
                  className=" text-[26px]"
                >
                  <IoMdCart />
                </Link>
                <h1 className="text-white text-xl">Корзина</h1>
              </div>
              {admin ? (
                <div
                  onClick={() => setModal(!modal)}
                  className="flex items-center justify-center flex-col duration-[0.5s] hover:bg-[#ffffff30] rounded-[7px] p-[10px] cursor-pointer "
                >
                  <a className="text-white text-[26px]">
                    <FaRegUserCircle />
                  </a>
                  <h1 className="text-white text-xl">Админ</h1>
                </div>
              ) : null}
              <div
                onClick={() => nav(`/history`)}
                className="flex items-center justify-center flex-col duration-[0.5s] hover:bg-[#ffffff30] rounded-[7px] p-[10px] cursor-pointer "
              >
                <a className="text-white text-[28px]">
                  <MdAccessTime />
                </a>
                <h1 className="text-white text-xl">История</h1>
              </div>
              {history.length ? (
                <h1
                  style={{
                    position: "absolute",
                    marginTop: "-50px",
                    marginLeft: "627px",
                    width: "20px",
                    height: "20px",
                    background: "red",
                    borderRadius: "50%",
                    color: "white",
                    fontSize: "14px",
                    textAlign: "center",
                  }}
                >
                  {history.length}
                </h1>
              ) : null}
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
    </div>
  );
};

export default Header;
