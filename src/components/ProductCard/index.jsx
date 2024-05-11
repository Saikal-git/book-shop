import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";

const ProductCard = ({ el }) => {
  return (
    <div className="flex">
      <div className="container">
        <div className="">
          <div className="w-[300px] h-[470px] border-2 border-black">
            <Link to={`/productdetails/${el.id}`}>
              <img
                src={el.url}
                alt="img"
                width={300}
                className="cursor-pointer"
              />
            </Link>
            <div className="flex items-center justify-between mt-[15px] px-[20px]">
              <h1 className="text-[25px] font-bold">{el.price}сом</h1>
              <a className="text-[25px] font-bold">
                <MdOutlineShoppingCart />
              </a>
            </div>
            <h1 className="text-[20px] px-[20px]">
              {el.name}/{el.category}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
