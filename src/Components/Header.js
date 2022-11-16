import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

import { CryptoState } from "../CryptoContext";
const Header = () => {
  const { currency, setcurrency } = CryptoState();
  let navigate = useNavigate();
  return (
    <>
      <nav className="navbar">
        <h1 onClick={() => navigate("/")} className="navbar-logo">
          Crypto Tracker
        </h1>
        <navigate />
        <div className="currency-box">
          <select
            defaultValue={currency}
            onChange={(e) => setcurrency(e.target.value)}
            className="currency-option"
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
