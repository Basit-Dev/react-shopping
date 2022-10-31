import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="product" element={<Product />} />
      <Route path="cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
