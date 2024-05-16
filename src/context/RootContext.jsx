import React, { useState, useEffect } from "react";
import { BookShopContext } from ".";

const RootContext = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [productAll, setProductAll] = useState([]);
  const [admin, setAdmin] = useState(true);
  const [basket, setBasket] = useState([]);
  const [details, setDetails] = useState({});
  const [cart, setCart] = useState(false);
  const [history, setHistory] = useState([]);

  const getProduct = () => {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let resadmin = JSON.parse(localStorage.getItem("admin"));
    let adminBas = JSON.parse(localStorage.getItem("basket")) || [];
    let detailsProduct = JSON.parse(localStorage.getItem("details")) || [];
    let history = JSON.parse(localStorage.getItem("history")) || [];
    setProductAll(products);
    setAdmin(resadmin);
    setBasket(adminBas);
    setDetails(detailsProduct);
    setHistory(history);
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
        basket,
        details,
        cart,
        history,
        setHistory,
        setCart,
        setDetails,
        setBasket,
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
