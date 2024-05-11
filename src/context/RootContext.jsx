import React, { useState, useEffect } from "react";
import { BookShopContext } from ".";

const RootContext = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [productAll, setProductAll] = useState([]);
  const [admin, setAdmin] = useState(true);

  const getProduct = () => {
    let result = JSON.parse(localStorage.getItem("product")) || [];
    // let details = JSON.parse(localStorage.getItem("details")) || [];
    let resadmin = JSON.parse(localStorage.getItem("admin"));
    setProductAll(result);
    // setProductAll(details);
    setAdmin(resadmin);
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <BookShopContext.Provider
      value={{
        modal,
        productAll,
        admin,
        setAdmin,
        setProductAll,
        setModal,
      }}
    >
      {children}
    </BookShopContext.Provider>
  );
};

export default RootContext;
