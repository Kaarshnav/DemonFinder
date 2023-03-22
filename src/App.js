import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Monster from "./Components/Monster";
import MonsterClassBased from "./Components/MosterClassBased";
import SearchBox from "./Components/SearchBox";

function App() {
  let [counter, setCounter] = useState(0);
  const inc = () => {
    setCounter(counter++);
  };
  const dec = () => {
    setCounter(counter--);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>Jai Shree Krishna</p>
        <SearchBox />
        <h>Counter : {counter}</h>
        <button onClick={inc}> Increment </button>
        <button onClick={dec}> Deccrement </button>
        <MonsterClassBased />
        <Monster />
      </header>
    </div>
  );
}

export default App;
