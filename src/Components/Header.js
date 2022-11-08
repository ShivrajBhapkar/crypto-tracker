import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
// import DropDown from './DropDown'
const Header = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          logo
        </Link>
        <div></div>
      </nav>
    </>
  );
};

export default Header;
