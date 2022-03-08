import { useState } from "react";

const Colorize = () => {
  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  const [color, setColor] = useState(getRandomColor);

  const changeColorHandler = () => setColor(getRandomColor);

  return (
    <div>
      <div style={{ backgroundColor: color }}>
        <h2>Div {color}</h2>
      </div>
      <button onClick={changeColorHandler}>Change Color</button>
    </div>
  );
};

export default Colorize;
