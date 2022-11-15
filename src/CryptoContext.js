import React, { Children, useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
const Crypto = createContext();
const CryptoContext = ({ children }) => {
  const [currency, setcurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");
  useEffect(() => {
    if (currency === "INR") setSymbol("₹");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);
  console.log(currency);
  return (
    <Crypto.Provider value={{ currency, symbol, setcurrency }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;
export const CryptoState = () => {
  return useContext(Crypto);
};
