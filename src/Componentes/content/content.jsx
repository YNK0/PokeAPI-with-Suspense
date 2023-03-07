import React, { Suspense, useState } from "react";
import { fetchData } from "./fetchData";
import "./card.css";

const apiData = fetchData("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0");

const getNumber = (url) => {
  const number = url.split("/");
  return number[number.length - 2];
};

function Content() {
  const data = apiData.read();
  
  return (
    <div className="App">
      <h1>PokeAPI test with Suspense</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {data?.results.map((item) => (
          <div key={`${item.name}id`} className="card">
            {item.name}
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getNumber(item.url)}.png`} />
          </div>
        ))}
      </Suspense>
    </div>
  );
}
export default Content;