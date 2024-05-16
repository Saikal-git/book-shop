import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BookShopContext } from "../../context";
import ProductCard from "../ProductCard";

const Search = () => {
  const { title } = useParams();
  const { productAll } = useContext(BookShopContext);
  console.log(productAll);
  const searchProduct = productAll?.filter((el) => el.name === title);
  console.log(title, "title");
  return (
    <div className="py-[50px]">
      <div className="container">
        <div className="flex items-center flex-wrap gap-[40px]">
          {searchProduct?.map((el, idx) => (
            <ProductCard el={el} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
