import React from "react";
import { useState } from "react";
function Value(props) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <p>You typed:{inputValue}</p>
    </div>
  );
}

export default Value;
