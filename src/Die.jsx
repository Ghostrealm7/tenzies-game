import React from "react";

function Die({ isHeld, value, holdDice, id, isDark }) {
  const darkStyle = {
    backgroundColor: isHeld && "#702632",
  };

  const lightStyle = {
    backgroundColor: isHeld && "#D3AB9E",
  };

  return (
    <>
      <div className="die" style={isDark ? darkStyle : lightStyle} onClick={() => holdDice(id)}>
        <h2 className="die-num">{value}</h2>
      </div>
    </>
  );
}

export default Die;
