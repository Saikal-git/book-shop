import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import CreateProduct from "./components/CreateProduct";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createProduct" element={<CreateProduct />} />
        <Route path="/productdetails/:title" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
