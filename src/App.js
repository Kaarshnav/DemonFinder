import "./App.css";
import Monster from "./Components/Monster";
import MonsterClassBased from "./Components/MosterClassBased";
import SearchBox from "./Components/SearchBox";
import Counter from "./Components/Counter";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="app-title">Daanav Dhundoo</p>
        {/* <Counter />*/}
        <SearchBox />
        {/*<MonsterClassBased />*/}
        {/*<Monster />*/}
      </header>
    </div>
  );
}

export default App;
