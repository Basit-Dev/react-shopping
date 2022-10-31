import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>Home</div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
        <Link to="/" className="navbar-brand">Home</Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
              <Link to="/product">Product</Link>
              </li>
              <li class="nav-item">
              <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
   


    </>
  );
}
