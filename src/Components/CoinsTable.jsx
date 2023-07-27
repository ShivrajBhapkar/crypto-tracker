import axios from "axios";
import { useRef } from "react";
import { debounce } from "lodash";
import React, { useEffect, useState } from "react";
import { CryptoState } from "../CryptoContext";
import io from "socket.io-client";
import Coin from "../Coin";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import CoinPage from "../routes/CoinPage";

const CoinsTable = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrrentPage] = useState(1);
    const [recordsPerPage] = useState(10);
    const { currency, symbol } = CryptoState();
    const [count, setCount] = useState(0);
    const socket = useRef();

    const fetchData = async (currency) => {
        try {
            const response = await axios.get(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
            );
            setCoins(response.data);
            return response.data;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        // Fetch initial data from the API
        socket.current = io("https://cryptosocket.onrender.com");

        const fetchInitialData = async () => {
            const initialData = await fetchData(currency);
            // Emit the initial data to the Socket.IO server
            if (initialData) {
                socket.current.emit("initialData", { initialData, currency });
            }
        };

        fetchInitialData();

        socket.current.on("updateData", (updatedData) => {
            setCoins(updatedData);
            setCount((prevCount) => prevCount + 1);
        });

        return () => {
            socket.current.disconnect();
        };
    }, [currency]);

    const handleChange = (e) => {
        // Use debounced version of setSearch
        debouncedHandleChange(e.target.value);
    };
    const debouncedHandleChange = debounce((value) => {
        setSearch(value);
    }, 500); // Debounce for 500ms

    const filteredCoins = coins.filter((coin) => {
        return (
            coin.name.toLowerCase().includes(search.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(search.toLowerCase())
        );
    });

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const nPages = Math.ceil(filteredCoins.length / recordsPerPage);

    return (
        <>
            <div className="coin-app">
                <div className="coin-search">
                    <h1 className="coin-text">Search Currency</h1>
                    <form>
                        <input
                            type="text"
                            placeholder="Search"
                            className="coin-input"
                            onChange={handleChange}
                        />
                    </form>
                </div>

                <div className="cointable">
                    <h3 style={{ color: "green", textAlign: "center" }}>
                        click on coin to see detail
                    </h3>
                    {filteredCoins
                        .slice(indexOfFirstRecord, indexOfLastRecord)
                        .map((coin) => {
                            return (
                                <Link
                                    to={`/coins/${coin.id}`}
                                    element={<CoinPage />}
                                    key={coin.id}
                                >
                                    <Coin
                                        name={coin.name}
                                        image={coin.image}
                                        symbol={coin.symbol}
                                        marketcap={coin.market_cap}
                                        price={coin.current_price}
                                        priceChange={
                                            coin.price_change_percentage_24h
                                        }
                                        volume={coin.total_volume}
                                        currency={symbol}
                                    />
                                </Link>
                            );
                        })}
                </div>

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
