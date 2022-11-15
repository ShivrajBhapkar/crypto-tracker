import { React, useState, useEffect } from "react";
import Pagination from "../Components/Pagination";
import axios from "axios";
import Coin from "../Coin";
import DropDown from "../Components/DropDown";
import "./Homepage.css";
import CoinsTable from "../Components/CoinsTable";
function HomePage() {
  // const [coins, setCoins] = useState([]);
  // const [search, setSearch] = useState("");
  // const [currentPage, setCurrrentPage] = useState(1);
  // const [currency, setCurrency] = useState("INR");
  // const [symbol, setSymbol] = useState("₹");
  // const [recordsPerPage] = useState(10);

  // useEffect(() => {
  //   const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       setCoins(res.data);
  //       // console.log(res.data);
  //     })
  //     .catch((error) => console.log(error));
  //   if (currency === "INR") setSymbol("₹");
  //   else if (currency === "USD") setSymbol("$");
  // }, [currency]);
  // const handleChange = (e) => {
  //   setSearch(e.target.value);
  // };
  // const filteredCoins = coins.filter((coin) => {
  //   return coin.name.toLowerCase().includes(search.toLowerCase());
  // });
  // const indexOfLastRecord = currentPage * recordsPerPage;
  // const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  // const nPages = Math.ceil(coins.length / recordsPerPage);

  return (
    <>
      {/* <div>
        <DropDown currency={currency} setCurrency={setCurrency} />
      </div>
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
      </div> */}
      <CoinsTable />
    </>
  );
}

export default HomePage;
