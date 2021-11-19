import "./Keyboard.css";

import { useState } from "react";
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function getAllIndexes(arr, val) {
  let indexes = [],
    i;
  for (i = 0; i < arr.length; i++) if (arr[i] === val) indexes.push(i);
  return indexes;
}

function Keyboard({ keyword, inscriptedWord, onInscriptedWordChange }) {
  const [usedLetters, setUsedLetters] = useState("");
  const [lifes, setLifes] = useState(10);

  const handleOnClick = (letter) => {
    setUsedLetters(usedLetters + letter);
    const guesses = getAllIndexes(keyword, letter);
    console.log(guesses);

    if (guesses.length === 0) {
      setLifes(lifes - 1);
    }

    //if (guessses.length === 0) {

    // if (number of wrong answers === life pool) {hang the man}}

    let showGoodLetter = (" " + inscriptedWord).slice(1);
    for (const index of guesses) {
      showGoodLetter =
        showGoodLetter.substr(0, index * 2) +
        letter +
        showGoodLetter.substr(index * 2 + 1, showGoodLetter.length);
    }
    onInscriptedWordChange(showGoodLetter);
  };

  return (
    <div className="keyboard_box">
      <div className="keyborad_buttons">
        {alphabet.map((character) => (
          <button
            className="letterButton"
            key={character}
            disabled={usedLetters.includes(character) || lifes === 0}
            onClick={() => handleOnClick(character)} // dzieki funkcji bezimiennej handle on click razem z propsem wykona się po przekazaniu wyżej.
          >
            {character}
          </button>
        ))}
      </div>
      <div>Lifes remaning {lifes}</div>
      <h1 hidden={lifes !== 0}>Game Over</h1>
      <button>reset</button>
    </div>
  );
}

export default Keyboard;
