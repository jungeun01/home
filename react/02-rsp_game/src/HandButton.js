import React from "react";

function HandButton({ children, onclick }) {
  const handleclick = () => {
    onclick(children);
  };
  return <button onClick={handleclick}>{children}</button>;
}

export default HandButton;
