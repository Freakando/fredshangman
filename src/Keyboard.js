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

  const handleOnClick = (letter) => {
    setUsedLetters(usedLetters + letter);
    const guesses = getAllIndexes(keyword, letter);

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
            disabled={usedLetters.includes(character)}
            onClick={() => handleOnClick(character)} // dzieki funkcji bezimiennej handle on click razem z propsem wykona się po przekazaniu wyżej.
          >
            {character}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Keyboard;
