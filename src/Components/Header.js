import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import { CryptoState } from "../CryptoContext";
const Header = () => {
  const { currency, setcurrency } = CryptoState();
  // console.log(currency);
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          Crypto Tracker
        </Link>
        <div>
          <select
            defaultValue={currency}
            onChange={(e) => setcurrency(e.target.value)}
          >
            <option value="INR">INR</option>
            <option value="USD">USD</option>
          </select>
        </div>
      </nav>
    </>
  );
};

export default Header;
