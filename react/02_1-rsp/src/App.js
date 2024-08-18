import "./App.css";
import HandleButton from "./HandleButton";
import { compareHand, generateRandomHand } from "./utils";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [other, setOther] = useState(0);
  const [bet, setBet] = useState(1);
  const [history, setHistory] = useState([]);
  const [me, setMe] = useState(["?"]);
  const [theOther, setTheOther] = useState(["?"]);
  const handleClick = (value) => {
    const you = generateRandomHand();
    console.log(value);
    console.log(you);
    const wins = compareHand(value, you);
    console.log(wins);
    if (wins == 1) {
      setScore(score + Number(bet));
      setHistory((prevItem) => [...prevItem, "승리"]);
    } else if (wins == -1) {
      setOther(other + Number(bet));
      setHistory((prevItem) => [...prevItem, "패배"]);
    } else {
      setHistory((prevItem) => [...prevItem, "무승부"]);
    }
    setMe(value);
    setTheOther(you);
  };
  const handleChange = (e) => {
    setBet(e.target.value);
  };
  const reset = () => {
    setBet(1);
    setOther(0);
    setScore(0);
    setHistory([]);
  };
  return (
    <div className="App">
      <div className="title">
        <h1>가위바위보</h1>
        <button onClick={reset}>초기화</button>
      </div>
      <div className="count">
        <div>
          <div>{score}</div>
          <div>나</div>
        </div>
        <div>:</div>
        <div>
          <div>{other}</div>
          <div>상대</div>
        </div>
      </div>
      <div className="rsp">
        <div>{me}</div>
        <div>vs</div>
        <div>{theOther}</div>
      </div>
      <div className="bet">
        <span>배점</span>
        <input
          min={1}
          max={9}
          type="number"
          value={bet}
          onChange={handleChange}
        />
        <span>배</span>
      </div>
      <div className="history">
        <h2>승부기록</h2>
        <p>{history.join(" ,")}</p>
      </div>
      <div className="btn">
        <HandleButton onclick={handleClick}>rock</HandleButton>
        <HandleButton onclick={handleClick}>scissor</HandleButton>
        <HandleButton onclick={handleClick}>paper</HandleButton>
      </div>
    </div>
  );
}

export default App;
