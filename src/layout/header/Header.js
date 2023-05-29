import React from "react";
import Nav from "./nav/Nav";
import logo from "../../assets/images/logo.webp";
import "./Header.scss";

function Header() {
  return (
    <header>
      <Nav />
      <div className="header__box">
        <img src={logo} className="header__logo" alt="logo" />
        <h1 className="header__title">АЛЕКСАНДРА ДЕНИСОВА</h1>
        <h2 className="header__subtitle">СВАДЕБНЫЙ ФОТОГРАФ</h2>
      </div>

      {/* icons */}

      <div className="nav__icons-2">
        <a href="facebook.com" target="_blank">
          <i className="uil uil-facebook-f"></i>
        </a>
        <a href="instagram.com" target="_blank">
          <i className="uil uil-instagram"></i>
        </a>
        <a>
          <i className="uil uil-facebook-messenger-alt"></i>
        </a>
      </div>
    </header>
  );
}

export default Header;
