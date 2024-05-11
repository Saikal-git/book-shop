import React from "react";
import UiComponents from "./UiComponent";
import cat1 from "../../assets/img/cat1.png";

const Category = () => {
  return (
    <div>
      <UiComponents img={cat1} title={"детектив"} />
      <UiComponents />
    </div>
  );
};

export default Category;
