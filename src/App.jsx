import React from "react";
import { nanoid } from "nanoid";
import "./style.css";
import Die from "./Die";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";

// features to add : track rolls, track time, save best time/roll to localstorage, dark mode

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const [rollCount, setRollCount] = useState(0);

  const instructions =
    "Roll until all dice are the same. Click each die to freeze it at its current value between rolls";
  const winMessage = `You won in ${rollCount} rolls!`;

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const allSameValue = dice.every((die) => die.value === dice[0].value);
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
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

  function newGame() {
    setDice(allNewDice());
    setTenzies((prevTenzies) => !prevTenzies);
    setRollCount(0);
  }

  function rollDice() {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6), id: nanoid() };
      })
    );
    setRollCount((prevRollCount) => prevRollCount + 1);
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
        {tenzies && <Confetti />}
        <h1 className="title">Tenzies</h1>
        <p className="instructions"> {tenzies ? winMessage : instructions}</p>
        <div className="die-container">{diceElements}</div>
        <button className="roll-dice" onClick={tenzies ? newGame : rollDice}>
          {tenzies ? "New Game" : "Roll"}
        </button>
      </main>
    </>
  );
}

export default App;
