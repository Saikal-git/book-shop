import React, { useContext, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { BookShopContext } from "../../context";

const BasketCard = ({ el }) => {
  const { basket, setBasket } = useContext(BookShopContext);

  const deleteBasket = (data) => {
    let filterBasket = basket.filter((el) => el.id !== data.id);
    setBasket(filterBasket);
    localStorage.setItem("basket", JSON.stringify(filterBasket));
  };

  const plusBac = (data) => {
    let plus = basket?.map((el) =>
      el.id === data.id ? { ...el, quantity: el.quantity + 1 } : el
    );
    setBasket(plus);
  };

  const minucBas = (data) => {
    let minus = basket?.map((el) =>
      el.id === data.id
        ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
        : el
    );
    setBasket(minus);
  };

  return (
    <div className="flex w-[700px] h-[400px] border-2 border-black gap-11 p-[30px] relative">
      <img src={el.url} alt="" />
      <div className="">
        <h1 className="text-[35px] font-bold">{el.name}</h1>
        <h1 className="text-[25px]">{el.category}</h1>
        <h1 className="text-[25px]">{el.price * el.quantity}сом</h1>
        <div className="flex items-center gap-4 text-[20px] h-[25px] w-[98px] border-2 border-blue-900 mt-[20px]">
          <button
            onClick={() => minucBas(el)}
            className="w-[40px] h-[25px] bg-blue-900 text-white text-[30px] flex items-center justify-center"
          >
            -
          </button>
          <span>{el.quantity}</span>
          <button
            onClick={() => plusBac(el)}
            className="w-[40px] h-[25px] bg-blue-900 text-white text-[28px] flex items-center justify-center"
          >
            +
          </button>
        </div>
        <a
          onClick={() => deleteBasket(el)}
          className=" absolute bottom-[30px] right-[30px] text-[25px] bg-gray-200 active:bg-gray-300 rounded-[7px] p-[10px]"
        >
          <RiDeleteBinLine />
        </a>
      </div>
    </div>
  );
};

export default BasketCard;

// import React, { useContext } from "react";
// import { BookShopContext } from "../../context";
// import { MdDelete } from "react-icons/md";

// const BacketProduct = ({product}) => {
//     const {backet,setBacket} = useContext(BookShopContext)
//     console.log(backet, 'kkk');
//   let {url,name,category, price,description,quantity} = product

//   const deleteBac = (data) => {
//   let delete1 = backet.filter((el) => el.id !== data.id)
//   setBacket(delete1)
//   }

//   const plusBac = (data) => {
//     let plus = backet.map((el) => el.id === data.id ? {...el,quantity : el.quantity + 1} : el)
//     setBacket(plus)
//     console.log(plus);
//   }

//   const minucBas = (data) => {
//     let minus = backet.map((el) => el.id === data.id ? {...el,quantity : el.quantity > 1 ? el.quantity - 1 : 1} : el)
//     setBacket(minus)
//     console.log(minus);
//   }
//     return (

//         <div className="flex  w-[800px] h-[400px]  border-4 border-black p-[30px] my-[50px]">
//         <img src={url} alt="img" />
//        <div className=" ml-[40px] ">

//        <h1 className="">
//         <span className="text-[40px] font-bold">{name}</span>     <span className="text-[30px] font-serif">({category})</span></h1>
//        {/* <h1 className="text-[30px] font-serif">{category}</h1> */}
//             <h1 className="text-[20px] font-bold">{price} cом</h1>

//             <div className="flex items-center gap-[9px] text-[20px] border-2 border-blue-900 w-[91px] mt-7">
//                 <button  onClick={() => plusBac(product)}
//                 className="bg-blue-900 w-[30px] h-[30px] text-white">+</button>
//                 <span>{quantity}</span>
//                 <button
//                 onClick={() => minucBas(product)}
//                  className="bg-blue-900 w-[30px] h-[30px] text-white">-</button>

//             </div>
//                 <div className="">
//                     <button onClick={() => deleteBac(product)}>delte</button>
//                 </div>
//        </div>

//         </div>

//     );
// };

// export default BacketProduct;
