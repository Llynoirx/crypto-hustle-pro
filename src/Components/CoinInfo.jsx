import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const CoinInfo = ({image, name, symbol}) => {

    const [price, setPrice] = useState(null);

    // run whenever symbol we pass in changes
    useEffect(() => {
        const getCoinPrice = async() => {
            let query = `https://min-api.cryptocompare.com/data/price?
                         fsym=${symbol}&tsyms=USD&api_key=`+API_KEY;
            const response = await fetch(query);
            const json = await response.json();
            setPrice(json);
        }
        getCoinPrice().catch(console.error);
    }, [symbol]);

    return (
        <div>
            {price ? ( // rendering only if API call actually returned us data
                <li className="main-list" key={symbol}>
                    <img className="icons"
                    src={`https://www.cryptocompare.com${image}`} 
                    alt={`Small icon for ${name} crypto coin</img>`}
                    />
                    {name}<span className="tab"></span> ${price.USD} USD
                </li>
            ) : null}

            <Link
            style={{ color: "White" }}
            to={`/coinDetails/${symbol}`}
            key={symbol}
            >
            {name} <span className="tab"></span> ${price.USD} USD
            </Link>
        </div>
    )
};

export default CoinInfo;