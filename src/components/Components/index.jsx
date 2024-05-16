import React from "react";
import UiComponents from "./UiComponent";
import cat1 from "../../assets/img/cat1.png";
import cat2 from "../../assets/img/cat2.png";
import cat3 from "../../assets/img/cat3.png";
import cat4 from "../../assets/img/cat4.png";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-[50px]">
      <div className="container">
        <h1 className="text-[40px] text-blue-900 font-bold">Категории</h1>
        <div className="flex items-center gap-[30px]">
          <UiComponents img={cat1} title={"детектив"} />
          <UiComponents img={cat2} title={"Фантастика"} />
          <UiComponents img={cat3} title={"Приключения"} />
          <UiComponents img={cat4} title={"Научная"} />
        </div>
      </div>
    </div>
  );
};

export default Category;
