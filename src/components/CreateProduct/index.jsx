import React, { useContext, useState } from "react";
import { BookShopContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateProduct = () => {
  const nav = useNavigate();
  const [productImg, setProducImg] = useState("");
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const { productAll, setProductAll } = useContext(BookShopContext);

  const onChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setProducImg(reader.result);
    reader.readAsDataURL(file);
  };

  const errorMessage = (message) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const productCreate = () => {
    if (
      productName.trim() === "" ||
      productCategory.trim() === "" ||
      productPrice.trim() === "" ||
      productDescription.trim() === ""
    ) {
      errorMessage("Заполните пустые поля!");
    } else {
      let newProduct = {
        quantity: 1,
        id: productAll.length ? productAll[productAll.length - 1].id + 1 : 1,
        url: productImg,
        name: productName,
        price: productPrice,
        category: productCategory,
        description: productDescription, 
      };
      setProductName("");
      setProductPrice("");
      setProductCategory("");
      setProductDescription("");
      localStorage.setItem(
        "products",
        JSON.stringify([...productAll, newProduct])
      );
      setProductAll([...productAll, newProduct]);
    }
  };

  console.log(productAll, "pro");
  return (
    <div className="py-[70px]">
      <div className="container">
        <div className="flex items-start justify-between">
          <div className="flex items-center justify-center w-[40%]">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-[500px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={onChange}
              />
            </label>
          </div>
          <div className="w-[40%] flex items-center justify-center flex-col gap-[40px]">
            <input
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
              type="text"
              placeholder="Product Name"
              className="text-[30px] py-[10px] w-full px-[20px] border-2 border-blue-900 rounded-[5px] placeholder:text-blue-900 text-blue-900"
            />
            <div className="flex items-center justify-between w-full">
              <select
                className="text-[30px] py-[10px] w-[50%] px-[20px] border-2 border-blue-900 rounded-[5px] placeholder:text-blue-900 text-blue-900"
                onChange={(e) => setProductCategory(e.target.value)}
              >
                <option value="детектив">Category:</option>
                <option value="детектив">детектив</option>
                <option value="Фантастика">Фантастика</option>
                <option value="Приключения">Приключения</option>
                <option value="Научная">Научная</option>
              </select>
              <input
                onChange={(e) => setProductPrice(e.target.value)}
                value={productPrice}
                type="text"
                placeholder="Price"
                className="text-[30px] py-[10px] w-[40%] px-[20px] border-2 border-blue-900 rounded-[5px] placeholder:text-blue-900 text-blue-900"
              />
            </div>
            <textarea
              onChange={(e) => setProductDescription(e.target.value)}
              value={productDescription}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  productCreate();
                }
              }}
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Product description..."
              className="text-[30px] py-[10px] w-full px-[20px] border-2 border-blue-900 rounded-[5px] placeholder:text-blue-900 text-blue-900"
            ></textarea>
            <button
              onClick={() => {
                productCreate();
              }}
              className="w-full border-4 border-blue-900 rounded-[6px] text-[30px] py-[5px] font-bold text-blue-900"
            >
              SAVE
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreateProduct;
