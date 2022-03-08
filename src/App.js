import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  const [color, setColor] = useState(getRandomColor);

  const changeColorHandler = () => setColor(getRandomColor);

  return (
    <div className="App">
      <header style={{ backgroundColor: color }} className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={changeColorHandler}>Change Color</button>
      </header>
    </div>
  );
}

export default App;
