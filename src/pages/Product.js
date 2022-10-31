import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>Product</div>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
    </>
  );
}
