import React from "react";

function Die({ isHeld, value, holdDice, id }) {
  const styles = {
    backgroundColor: isHeld ? "#59E391" : "white",
  };

  return (
    <>
      <div className="die" style={styles} onClick={() => holdDice(id)}>
        <h2 className="die-num">{value}</h2>
      </div>
    </>
  );
}

export default Die;
