import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>Home</div>
      <Link to="/">Home</Link>
      <Link to="/product">Product</Link>
      <Link to="/cart">Cart</Link>
    </>
  );
}
