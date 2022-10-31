import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const show = navbarOpen ? "show" : "";
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <Link to="/" className="navbar-brand">
            Home
          </Link>
          <button
            onClick={handleToggle}
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={show ? true : false}
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class={`collapse ${show} navbar-collapse`} id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/product" className="nav-link">
                  Product
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/cart" className="nav-link">
                  Cart
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" className="nav-link disabled">
                  Disabled
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
