import { useState } from "react";
import "./App.css";
import logoImg from "./assets/logo.png";
import Board from "./Board";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [gameHistory, setGameHistory] = useState([]);
  const [otherGameHistory, setOtherGameHistory] = useState([]);
  // console.log(gameHistory);
  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setGameHistory([...gameHistory, nextMyNum]);
    setOtherGameHistory([...otherGameHistory, nextOtherNum]);
  };
  const handleClearClick = () => {
    setGameHistory([]);
    setOtherGameHistory([]);
  };
  console.log(random);

  return (
    <div className="App">
      <div>
        <img src={logoImg} className="App-logo" />
        <h1 className="App-title">주사위 게임</h1>
        <div>
          <button className="App-button blue" onClick={handleRollClick}>
            던지기
          </button>
          <button className="App-button red" onClick={handleClearClick}>
            처음부터
          </button>
        </div>
      </div>
      <div className="App-boards">
        <Board name="나" gameHistory={gameHistory} color="blue" />
        <Board name="상대방" gameHistory={otherGameHistory} color="red" />
      </div>
    </div>
  );
}

export default App;
