import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";

const UiComponents = ({ title, img }) => {
  return (
    <Link to={`/sortProduct/${title}`}>
      <div
        className="w-[300px] h-[232px]  rounded-[20px] z-[-1] relative"
        style={{
          background: ` linear-gradient(rgba(1, 0, 73, 0.5), rgba(1, 0, 73, 0.5)),  url("${img}") no-repeat center / cover`,
          minHeight: "15vh",
        }}
      >
        <div className="absolute bottom-[20px] left-[25px] gap-[5px] hover:cursor-pointer flex items-center">
          <h1 className="text-white font-bold text-[25px] cursor-pointer">
            {title}
          </h1>
          <a className="text-white font-bold text-[30px] mt-[5px]">
            <HiArrowLongRight />
          </a>
        </div>
      </div>
    </Link>
  );
};

export default UiComponents;
