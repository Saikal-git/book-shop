import React, { useContext } from "react";
import { BookShopContext } from "../../context";
import ProductCard from "../ProductCard";
import { useParams } from "react-router-dom";

const SortProduct = () => {
  const { productAll } = useContext(BookShopContext);
  const { id } = useParams();
  console.log(id);
  return (
    <div className="container">
      <div className="flex gap-11 mt-[30px]">
        {productAll
          .filter((el) => el.category === id)
          .map((el, index) => (
            <ProductCard key={index} el={el} />
          ))}
      </div>
    </div>
  );
};

export default SortProduct;
