import "./App.css";
import reset from "./assets/ic-reset.svg";
import { useState } from "react";
import HandIcon from "./HandIcon";
import { compareHand, generateRandomHand, random } from "./utils";
import HandButton from "./HandButton";

function App() {
  const [score, setScore] = useState(0);
  const [other, setOther] = useState(0);
  const [bet, setBet] = useState(1);
  const [history, setHistory] = useState([]);
  // ["승리", "패배"]
  const handleClick = (value) => {
    // random(3);
    const you = generateRandomHand();
    console.log(value);
    console.log(you);
    const wins = compareHand(value, you);
    console.log(wins);
    if (wins == 1) {
      setScore(score + +bet);
      setHistory((a) => [...a, "승리"]);
    } else if (wins == -1) {
      // setOther(other + parseInt(bet));
      setOther(other + Number(bet));
      setHistory((prevItem) => [...prevItem, "패배"]);
    } else {
      setHistory((prevItem) => [...prevItem, "무승부"]);
    }
  };
  const handlechange = (e) => {
    setBet(e.target.value);
  };
  const handlereset = () => {
    setScore(0);
    setBet(1);
    setOther(0);
    setHistory([]);
  };
  return (
    <div className="App">
      <div>
        <h1 className="App-title">가위바위보</h1>
        <img src={reset} className="reset" onClick={handlereset} />
        <div className="score">
          <div className="count">
            <div className="number">{score}</div>
            <div>나</div>
          </div>
          <div className="ver">:</div>
          <div className="count">
            <div className="number">{other}</div>
            <div> 상대</div>
          </div>
        </div>
        <div className="rsp">
          <div>이미지</div>
          <div>vs</div>
          <div>이미지</div>
        </div>
        <div className="bet">
          <span>배점 </span>
          <input
            type="number"
            value={bet}
            onChange={handlechange}
            min={1}
            max={9}
          />
          <span> 배</span>
        </div>
        <div className="history">
          <h2>승부기록</h2>
          <p>{history.join(", ")}</p>
        </div>
        <div className="btn">
          {/* <button onClick={handleClick}>주먹</button>
          <button onClick={handleClick}>가위 </button>
          <button onClick={handleClick}>보</button> */}
          <HandButton onclick={handleClick}>rock</HandButton>
          <HandButton onclick={handleClick}>scissor</HandButton>
          <HandButton onclick={handleClick}>paper</HandButton>
        </div>
      </div>
    </div>
  );
}

export default App;
