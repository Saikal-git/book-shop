import React from "react";
import { useParams } from "react-router-dom";

const ProductCard = ({ el }) => {
//   const { prod } = useParams();
  return (
    <div>
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="rounded-t-lg" src={el.url} alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.price}</h1>
            <h5 class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">
              {el.name} / {el.category}
            </h5>
            <h3>{el.description}</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
