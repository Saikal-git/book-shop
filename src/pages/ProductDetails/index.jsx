import React, { useContext, useEffect, useState } from "react";
import { BookShopContext } from "../../context";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { title } = useParams();
  const nav = useNavigate();
  const { details, basket, setBasket } = useContext(BookShopContext);
  const [mouse, setMouse] = useState(false);
  // const someBasket = basket?.some((el) => el.id == title);
  console.log(basket, "basket");

  // const basketProduct = (data) => {
  //   setBasket([...basket, data]);
  //   localStorage.setItem("basket", JSON.stringify(data));
  // };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  let { url, name, price, category, description } = details;
  return (
    <div className="container">
      <div className="flex items-start py-[50px] gap-[60px]  relative">
        <img src={url} alt="img" width={400} className="w-[30%]" />
        <div className="flex items-start justify-between flex-col w-[70%] gap-[20px]">
          <h1 className="flex items-center gap-2 text-[20px]">
            <span className="text-[40px] font-bold">{name}</span> ({category})
          </h1>

          <p
            onMouseOver={() => setMouse(true)}
            onMouseOut={() => setMouse(false)}
            className="my-[30px] text-[24px]"
          >
            <i>{description?.slice(0, 20) + "  ..."}</i>
          </p>

          <div className=" flex items-center justify-between gap-96 ">
            <h1 className=" text-[40px] font-bold">{price}сом</h1>
            <button
              // onClick={() =>
              //   someBasket ? nav(`/basket`) : basketProduct(details)
              // }
              className="py-[7px]  text-[20px] px-[15px] border-2 border-black hover:border-green-600 hover:text-green-600"
            >
              купить сейчас
            </button>
          </div>

          <div
            style={{
              cursor: "pointer",
              transition: "1s",
              transform: mouse ? "translateY(-100px)" : "translateY(0px)",
              opacity: mouse ? "1" : "0",
            }}
            className="w-[700px] bg-gray-300 p-[30px] rounded-[30px] "
          >
            <p
              style={{
                width: "200px",
              }}
              className="text-[20px]   my-[30px]"
            >
              <i
                style={{
                  width: "200px",
                }}
                className="w-[100px]"
              >
                "{description}"
              </i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
