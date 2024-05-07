import React, { useContext } from "react";
import slider from "../../assets/img/homeImg.svg";
import ProductCard from "../ProductCard";
import { BookShopContext } from "../../context";

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
        >
          <div className="container">
            <div className="relative">
              <div className="absolute top-[500px] z-[-1]">
                {productAll.map((el, idx) => (
                  <ProductCard el={el} key={idx} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
