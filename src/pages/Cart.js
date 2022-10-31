import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>Cart</div>
      <Link to="/">Home</Link>
      <Link to="/product">Product</Link>
    </>
  );
}
