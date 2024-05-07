import React, { useState, useEffect } from "react";
import { BookShopContext } from ".";

const RootContext = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [productAll, setProductAll] = useState([]);

  const getProduct = () => {
    let result = JSON.parse(localStorage.getItem("product")) || [];
    setProductAll(result);
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <BookShopContext.Provider
      value={{
        modal,
        productAll,
        setProductAll,
        setModal,
      }}
    >
      {children}
    </BookShopContext.Provider>
  );
};

export default RootContext;
