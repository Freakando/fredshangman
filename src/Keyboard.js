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
let keyboardBox = "keyboard_box1";

function getAllIndexes(arr, val) {
  let indexes = [],
    i;
  for (i = 0; i < arr.length; i++) if (arr[i] === val) indexes.push(i);
  return indexes;
}

function Keyboard({ keyword, inscriptedWord, onInscriptedWordChange }) {
  const [usedLetters, setUsedLetters] = useState("");
  const [lifes, setLifes] = useState(6);
  if (lifes === 5) {
    keyboardBox = "keyboard_box2";
  } else if (lifes === 4) {
    keyboardBox = "keyboard_box3";
  } else if (lifes === 3) {
    keyboardBox = "keyboard_box4";
  } else if (lifes === 2) {
    keyboardBox = "keyboard_box5";
  } else if (lifes === 1) {
    keyboardBox = "keyboard_box6";
  } else if (lifes === 0) {
    keyboardBox = "keyboard_box7";
  }

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
    //`keyboard_box${lifes}`
    <div className={keyboardBox}>
      <h1 className="gameOver_button" hidden={lifes !== 0}>
        Game Over
      </h1>
      <div className="buttons_box">
        <div className="resetAndLifesButton_box">
          <div className="lifes">Lifes remaning {lifes}</div>
          <button className="reset_button">reset</button>
        </div>
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
      </div>
    </div>
  );
}

export default Keyboard;
