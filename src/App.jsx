import React from "react";
import { nanoid } from "nanoid";
import "./style.css";
import Die from "./Die";
import { useState, useEffect } from "react";

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    console.log("Dice changed");
  }, [dice]);

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDice;
  }

  function rollDice() {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6), id: nanoid() };
      })
    );
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElements = dice.map((die) => (
    <Die key={die.id} value={die.value} isHeld={die.isHeld} id={die.id} holdDice={holdDice} />
  ));

  return (
    <>
      <main>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its current value between
          rolls.
        </p>
        <div className="die-container">{diceElements}</div>
        <button className="roll-dice" onClick={rollDice}>
          Roll
        </button>
      </main>
    </>
  );
}

export default App;
