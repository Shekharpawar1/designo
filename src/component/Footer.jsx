import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <img
        src="./assets/images/shared/desktop/logo-dark.png"
        className="footer__logo"
        alt="designo software agency"
      />
      <div className="footer__menu">
        <ul className="footer__menu--list">
          <li className="footer__menu--listItems">
            <NavLink
              to="/about"
              style={{ color: "white", textDecoration: "none" }}
            >
              OUR COMPANY
            </NavLink>
          </li>
          <li className="footer__menu--listItems">
            <NavLink
              to="/location"
              style={{ color: "white", textDecoration: "none" }}
            >
              LOCATIONS
            </NavLink>
          </li>
          <li className="footer__menu--listItems">
            <NavLink
              to="/contact"
              style={{ color: "white", textDecoration: "none" }}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
      <p className="footer__address">
        Designo Central Office 3886 Wellington Street Toronto, Ontario M9C 3J5
      </p>
      <p className="footer_addressContact">
        Contact Us (Central Office) P: +1 253-863-8967 M: contact@designo.co
      </p>
      <div className="footer__socialLinks">
        <img
          src="./assets/images/shared/desktop/icon-facebook.svg"
          alt="facebook link and logo"
        />
        <img
          src="./assets/images/shared/desktop/icon-youtube.svg"
          alt="youtube link and logo"
        />
        <img
          src="./assets/images/shared/desktop/icon-twitter.svg"
          alt="twitter link and logo"
        />
        <img
          src="./assets/images/shared/desktop/icon-pinterest.svg"
          alt="pinterest link and logo"
        />
        <img
          src="./assets/images/shared/desktop/icon-instagram.svg"
          alt="instagram link and logo"
        />
      </div>
    </div>
  );
}

export default Footer;
