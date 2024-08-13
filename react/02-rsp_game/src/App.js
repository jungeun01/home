import "./App.css";
import reset from "./assets/ic-reset.svg";
import { useState } from "react";
import HandIcon from "./HandIcon";
function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <div>
        <h1 className="App-title">가위바위보</h1>
        <img src={reset} className="reset" />
        <div className="score">
          <div className="count">
            <div className="number">0</div>
            <div>나</div>
          </div>
          <div className="ver">:</div>
          <div className="count">
            <div className="number">0</div>
            <div> 상대</div>
          </div>
        </div>
        <div className="rsp">
          <div>
            <HandIcon />
          </div>
          <div>vs</div>
          <div>이미지</div>
        </div>
        <div className="bet">
          <span>배점 </span>
          <input type="number"></input>
          <span> 배</span>
        </div>
        <div className="history">
          <h2>승부기록</h2>
          <p>승&패</p>
        </div>
        <div className="btn">
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  );
}

export default App;
