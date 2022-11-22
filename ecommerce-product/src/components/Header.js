import React from "react";
import "./Header.css";
import logo from "./assets/logo.svg";
import cart from "./assets/icon-cart.svg";
import avatar from "./assets/image-avatar.png";
import hamburger from "./assets/Hamburger.png";

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        {/* Left Side Of Nav */}
        <div className="nav_left">
          <img src={logo} alt="logo" className="logo" />
          <div className="links">
            <a href="/#">Collections</a>
            <a href="/#">Men</a>
            <a href="/#">Women</a>
            <a href="/#">About Us</a>
            <a href="/#">Contact</a>
          </div>
        </div>
        {/* Right Side Of Nav */}
        <div className="nav_right">
          <img src={cart} alt="" className="cart" />
          <img src={avatar} alt="" className="avatar" />
        </div>
        <img src={hamburger} alt="hamburger" className="hamburger" />
      </div>
    </div>
  );
};

export default Header;
