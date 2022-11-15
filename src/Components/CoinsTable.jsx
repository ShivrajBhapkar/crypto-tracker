import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CryptoState } from "../CryptoContext";
import Coin from "../Coin";
import Pagination from "./Pagination";
const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrrentPage] = useState(1);
  // const [loading , setLoading] = useState(init)
  const [recordsPerPage] = useState(10);
  const { currency, symbol } = CryptoState();
  const fetchCoins = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
    const { data } = await axios.get(url);
    setCoins(data);
  };
  console.log(coins);
  useEffect(() => {
    fetchCoins();
  }, [currency]);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredCoins = coins.filter((coin) => {
    return (
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
  });
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const nPages = Math.ceil(coins.length / recordsPerPage);
  return (
    <>
      <div className="coin-app">
        <div className="coin-search">
          <h1 className="coin-text">search a currency</h1>
          <form>
            <input
              type="text"
              placeholder="Search"
              className="coin-input"
              onChange={handleChange}
            />
          </form>
        </div>
        {filteredCoins
          .slice(indexOfFirstRecord, indexOfLastRecord)
          .map((coin) => {
            return (
              <Coin
                key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                marketcap={coin.market_cap}
                price={coin.current_price}
                priceChange={coin.price_change_percentage_24h}
                volume={coin.total_volume}
                currency={symbol}
              />
            );
          })}
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrrentPage}
        />
      </div>
    </>
  );
};

export default CoinsTable;
