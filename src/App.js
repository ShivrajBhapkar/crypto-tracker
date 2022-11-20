import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import HomePage from "./Pages/Homepage";
import CoinPage from "./routes/CoinPage";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/coins" element={<CoinPage />}>
            <Route path=":id" element={<CoinPage />} />
          </Route>
          {/* <Route index path="/coins/id" element={<CoinPage />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
