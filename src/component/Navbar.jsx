import React from "react";

import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const handleClick = () => {
    // alert("11");
    document.querySelector("#hamburger").classList.add("active");
    document.querySelector("#close").classList.add("active");
    document.querySelector("#menu").classList.add("active");
  };
  const handleCloseClick = () => {
    document.querySelector("#hamburger").classList.remove("active");
    document.querySelector("#close").classList.remove("active");
    document.querySelector("#menu").classList.remove("active");
  };
  return (
    <div className="nav">
      <NavLink to="/">
        <img className="nav__logo" src="./assets/logo.png" alt="designo logo" />
      </NavLink>

      <div className="nav__menu">
        <ul className="nav__menu--list" id="menu">
          <li className="nav__menu--listItems">
            <NavLink
              to="/about"
              style={{ color: "white", textDecoration: "none" }}
            >
              OUR COMPANY
            </NavLink>
          </li>
          <li className="nav__menu--listItems">
            <NavLink
              style={{ color: "white", textDecoration: "none" }}
              to="/location"
            >
              LOCATIONS
            </NavLink>
          </li>
          <li className="nav__menu--listItems">
            <NavLink
              to="/contact"
              style={{ color: "white", textDecoration: "none" }}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
      <i
        onClick={handleClick}
        id="hamburger"
        class="fa-solid fa-bars nav__menu--hamburgerIcon"
      ></i>
      <i
        id="close"
        onClick={handleCloseClick}
        class="fa-solid fa-xmark nav__menu--closeIcon"
      ></i>
    </div>
  );
}

export default Navbar;
