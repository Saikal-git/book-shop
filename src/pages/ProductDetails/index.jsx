import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookShopContext } from "../../context";

const ProductDetails = () => {
  const { title } = useParams();
  const { productAll } = useContext(BookShopContext);
  const [mouse, setMouse] = useState(false);
  let productDet = productAll.find((el) => el.id === +title);
  // useEffect(() => {
  //   if (productDet) {
  //     localStorage.setItem("details", JSON.stringify(productDet));
  //   }
  // }, [productDet]);

  let { url, name, price, category, description } = productDet;
  return (
    <div className="container">
      <div className="flex items-start py-[50px] gap-[60px]  z-[-1] relative">
        <img
          src={productDet && productDet.url}
          alt="img"
          width={400}
          className="w-[30%]"
        />
        <div className="flex items-start justify-between flex-col w-[70%] gap-[20px]">
          <h1 className="">
            <span className="text-[26px] font-bold">
              {productDet && productDet.name}
            </span>{" "}
            ({productDet && productDet.category})
          </h1>

          <p
            onMouseOver={() => setMouse(true)}
            onMouseOut={() => setMouse(false)}
            className="my-[30px] text-[24px] hover:cursor-pointer"
          >
            <i>
              {productDet && productDet.description.slice(0, 250) + "  ..."}
            </i>
          </p>

          <div className=" flex items-center justify-between gap-96">
            <h1 className=" text-[24px] font-bold">
              {productDet && productDet.price}сом
            </h1>
            <button className="py-[6px] px-[14px] border-2 duration-500 border-black hover:border-green-600 hover:text-green-600 cursor-pointer ">
              купить сейчас
            </button>
          </div>

          <div style={{
            transition: "1s",
            transform: mouse ? "translateY(-100px)" : "translateY(0px)",
            opacity: mouse ? "1" : "0",
          }}
          className="w-[700px] bg-state-400 p-[30px] rounded-[30px]"
          >
            <p className="text-[20px] my-[30px]">
              {" "}
              <i>"{productDet && productDet.description}"</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
