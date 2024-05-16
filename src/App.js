import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import CreateProduct from "./components/CreateProduct";
import ProductDetails from "./pages/ProductDetails";
import Basket from "./components/Components/Basket";
import SortProduct from "./components/SortProduct";
import Search from "./components/Search";
import History from "./components/Components/History";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createProduct" element={<CreateProduct />} />
        <Route path="/productdetails/:title" element={<ProductDetails />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/sortProduct/:id" element={<SortProduct />} />
        <Route path="/search/:title" element={<Search />} />
        <Route path="/history" element={<History/>} />
      </Routes>
    </div>
  );
}

export default App;
