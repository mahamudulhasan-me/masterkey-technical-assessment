import { useState } from "react";
import "./App.css";
import Tile from "./Tile";

const App = () => {
  const [outputString, setOutputString] = useState("");

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleTileClick = (letter) => {
    let newOutput = outputString + letter;
    newOutput = newOutput.replace(/(.)\1{2,}/g, (match) =>
      "_".repeat(Math.ceil(match.length / 3))
    );
    setOutputString(newOutput);
  };

  return (
    <div className="App">
      <div className="grid">
        {alphabet.map((letter) => (
          <Tile key={letter} letter={letter} onClick={handleTileClick} />
        ))}
      </div>
      <div id="outputString">{outputString}</div>
    </div>
  );
};

export default App;
