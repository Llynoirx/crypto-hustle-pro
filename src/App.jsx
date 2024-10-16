import { useState, useEffect } from 'react'
import CoinInfo from "./Components/CoinInfo";
import './App.css'

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [list, setList] = useState(null);

  useEffect(() => {
    const fetchAllCoinData = async() => {
      let query = "https://min-api.cryptocompare.com/data/all/coinlist?&api_key"+API_KEY;
      const response = await fetch(query);
      const json = await response.json();
      setList(json);
    }; 
    fetchAllCoinData().catch(console.error);
  }, []);

  return (
  <div className="whole-page">
    <h1>My Crypto List</h1>
    <input
      type="text"
      placeholder="Search..."
      onChange={(inputString) => searchItems(inputString.target.value)}
    />
      <ul>
      {list && Object.entries(list.Data).map(([coin]) => 
        list.Data[coin].PlatformType === "blockchain" ? 
        (<CoinInfo
          image={list.Data[coin].ImageUrl}
          name={list.Data[coin].FullName}
          symbol={list.Data[coin].Symbol}
        />) 
        : null )}
      
      </ul>
  </div>
  )
}

export default App
