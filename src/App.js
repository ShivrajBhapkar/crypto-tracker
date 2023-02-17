import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import HomePage from "./Pages/Homepage";
import CoinPage from "./routes/CoinPage";

// import {io} from 'socket.io-client';
// import { CryptoState } from "./CryptoContext";
// const socket = io("http://localhost:3001");
function App() {
//   const { currency , setCoins } = CryptoState();
//  useEffect(()=>{
//   socket.on('latest_quakes', data => {
// 	  if (data) {
//       console.log(data)
//        setCoins(data)
// 	  }
// 	} , []);
//   return ()=>{
//     socket.off("latest_quakes")
//   }
//  })

//  socket.emit("currency" , currency)
  return (
    <BrowserRouter>
      <div>
        <Header />
        
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/coins" element={<CoinPage />}>
            <Route path=":id" element={<CoinPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
