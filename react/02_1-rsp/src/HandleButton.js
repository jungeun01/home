import React from "react";

function HandleButton({ children, onclick }) {
  const handleClick = () => {
    onclick(children);
  };

  return <button onClick={handleClick}>{children}</button>;
}

export default HandleButton;
