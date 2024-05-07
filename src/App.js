import {Route, Routes} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import CreateProduct from "./components/CreateProduct";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/createProduct" element={<CreateProduct/>}/>
        {/* <Route path="/productcard/:prod" element={<Home/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
