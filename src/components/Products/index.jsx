import React, { useContext, useState } from "react";
import { BookShopContext } from "../../context";
import ProductCard from "../ProductCard";

const Products = () => {
  const { productAll, setProductAll } = useContext(BookShopContext);
  const [sort, setSort] = useState("");

  const sortProduct = () => {
    localStorage.setItem("products", JSON.stringify(sortProduct));
    if (sort === "expensive") {
      setProductAll(productAll.sort((a, b) => a.price - b.price));
    } else if (sort === "cheap") {
      setProductAll(productAll.sort((a, b) => b.price - a.price));
    }
  };
  return (
    <div>
      <div className="container">
        <div className="py-[40px]">
          <div className="flex items-center justify-between mb-[30px]">
            <h1 className="text-blue-900 text-4xl font-bold">
              Возможно, Вам понравится
            </h1>
            <select
              onChange={(e) => {
                setSort(e.target.value);
                sortProduct();
              }}
              className="text-blue-900 text-1xl font-bold border-2 border-blue-900 py-[6px] px-[14px]"
            >
              <option value="">Сортировка</option>
              <option value="expensive">Дорогие</option>
              <option value="cheap">Дешевые</option>
            </select>
          </div>

          <div className="flex items-center flex-wrap gap-[70px] mt-[50px]">
            {productAll.map((el, idx) => (
              <ProductCard el={el} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
