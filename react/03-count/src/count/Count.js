import React from "react";
import styles from "./Count.css";
import { useState } from "react";
function Count(props) {
  const [count, setCount] = useState(0);
  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  return (
    <div className="count">
      <button onClick={minus}>-</button>
      <span>{count}</span>
      <button onClick={plus}>+</button>
    </div>
  );
}

export default Count;
