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
function Keyboard({ keyword, inscriptedWord, onInscriptedWordChange }) {
  const [selectedLetter, setSelectedLeter] = useState(null);
  const [usedLetters, setUsedLetters] = useState("");

  const handleOnClick = (letter) => {
    setSelectedLeter(letter);
    setUsedLetters(usedLetters + letter);
  };
  const isLetterCorrect = keyword.includes(selectedLetter);

  const indexOFCorrectLetter = keyword.indexOf(selectedLetter);

  // const swapLetter = inscriptedWord.replace(
  //   indexOFCorrectLetter,
  //   selectedLetter
  // );

  return (
    <div className="keyboard_box">
      <div className="keyborad_buttons">
        {alphabet.map((letter) => (
          <button
            className="letterButton"
            key={letter}
            onClick={() => handleOnClick(letter)} // dzieki funkcji bezimiennej handle on click razem z propsem wykona się po przekazaniu wyżej.
          >
            {letter}
          </button>
        ))}
      </div>

      <h2>{selectedLetter}</h2>
      <h1>{usedLetters}</h1>
      {console.log(isLetterCorrect)}
      {console.log(keyword)}
      {console.log(indexOFCorrectLetter)}
      {/* {console.log(swapLetter)} */}
    </div>
  );
}

export default Keyboard;
