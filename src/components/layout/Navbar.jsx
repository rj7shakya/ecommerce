import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <i className="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
      <a href="#" className="navbar-brand ml-2">
        Hamro Shop
      </a>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarMenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarMenu">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="m-2 text-decoration-none black">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/shop" className="m-2 text-decoration-none black">
              Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="m-2 text-decoration-none black">
              Cart
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="m-2 text-decoration-none black">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
