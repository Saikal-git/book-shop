import React, { useContext } from "react";
import slider from "../../assets/img/homeImg.svg";
import { BookShopContext } from "../../context";
import Products from "../Products";
import Category from "../Components";

const Home = () => {
  const { productAll } = useContext(BookShopContext);
  return (
    <>
      <div id="home">
        <div
          style={{
            background: `url("${slider}") no-repeat center / cover`,
            minHeight: "70vh",
          }}
        ></div>
        <div className="">
          <Category />
          <Products />
        </div>
      </div>
    </>
  );
};

export default Home;
