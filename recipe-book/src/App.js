import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const APP_ID = "4beb3e66";
  const APP_KEY = "c144583f1c00c01c6ff8397b2d5fc239";

  const [counter, setCounter] = useState(0);
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();

    console.log(data);
  };

  return (
    <div className="App">
      <h1>Hello React</h1>
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
