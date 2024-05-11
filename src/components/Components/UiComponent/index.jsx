import React from "react";

const UiComponents = ({ title, img }) => {
  return (
    <div>
      <div className="">
        <img src={img} alt="" />
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default UiComponents;
