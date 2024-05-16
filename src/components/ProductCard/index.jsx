import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BookShopContext } from "../../context";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ el }) => {
  const { basket, setBasket, setDetails, productAll, setProductAll, cart, setCart } =
    useContext(BookShopContext);
  const nav = useNavigate();
  const someBas = basket.some((ell) => ell.id === el.id);
  const errorMessage = () =>
    toast.error("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const addToBasket = (data) => {
    let findBasket = basket?.find((el) => el.id === data.id);
    if (findBasket) {
      errorMessage();
    } else {
      setBasket([...basket, data]);
      localStorage.setItem("basket", JSON.stringify([...basket, data]));
      setCart(true)
      setTimeout(() => {
        setCart(false)
      }, 400);
    }
  };
console.log(cart, "cart");

  const goToDetails = (data) => {
    localStorage.setItem("details", JSON.stringify(data));
    setDetails(data);
    nav(`/productdetails/${data.id}`);
    console.log(data.id);
  };

  const deleteProduct = (data) => {
    let delProduct = productAll.filter((el) => el.id !== data.id);
    setProductAll(delProduct);
    localStorage.setItem("products", JSON.stringify(delProduct));
  };

  return (
    <div className="flex">
      <div className="container">
        <div className="">
          <div className="w-[300px] h-[470px] border-2 border-black relative">
            <img
              onClick={() => goToDetails(el)}
              src={el.url}
              alt="img"
              width={300}
              className="cursor-pointer"
            />
            <div className="flex items-center justify-between mt-[15px] px-[20px]">
              <h1 className="text-[25px] font-bold">{el.price}сом</h1>
              <a
                onClick={() => {
                  addToBasket(el);
                }}
                className="text-[30px] font-bold cursor-pointer"
              >
                {someBas ? (
                  <MdOutlineShoppingCartCheckout />
                ) : (
                  <MdOutlineShoppingCart />
                )}
              </a>
            </div>
            <a
              onClick={() => deleteProduct(el)}
              className=" absolute bottom-[25px] right-[20px] text-[25px] font-bold hover:bg-gray-200 hover:rounded-[7px] active:bg-gray-300 active:rounded-[7px] p-[5px]"
            >
              <RiDeleteBinLine />
            </a>
            <h1 className="text-[20px] px-[20px]">
              {el.name}/{el.category}
            </h1>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductCard;
