import React from "react";
import "./style.css";
import Die from "./Die";
import { useState } from "react";

function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }

  console.log(allNewDice());

  const diceElements = dice.map((die) => <Die value={die} />);

  return (
    <>
      <main>
        <div className="die-container">{diceElements}</div>
      </main>
    </>
  );
}

export default App;
