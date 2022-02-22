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

function Keyboard({
  keyword,
  inscriptedWord,
  onInscriptedWordChange,
  reset,
  newKeyword,
}) {
  const [usedLetters, setUsedLetters] = useState("");
  const [lifes, setLifes] = useState(6);
  const [winStreak, setWinStreak] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [hideKeywordButton, setHideKeywordButton] = useState(true);

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
    // console.log(guesses);
    // console.log(inscriptedWord);

    if (guesses.length === 0) {
      setLifes(lifes - 1);
      if (lifes === 1) {
        setWinStreak(0);
      }
    } else {
      let showGoodLetter = (" " + inscriptedWord).slice(1);
      for (const index of guesses) {
        showGoodLetter =
          showGoodLetter.substring(0, index * 2) +
          letter +
          showGoodLetter.substring(index * 2 + 1, showGoodLetter.length);
      }
      handleWin(showGoodLetter);
      onInscriptedWordChange(showGoodLetter);
    }
  };

  const resetProperties = () => {
    setGameWon(false);
    setLifes(6);
    setUsedLetters("");
    setHideKeywordButton(true);

    keyboardBox = "keyboard_box1";
  };

  const handleReset = () => {
    resetProperties();
    reset();
    setWinStreak(0);
  };

  const handleNewKeyword = () => {
    resetProperties();
    newKeyword();
    setHideKeywordButton(true);
  };

  const handleWin = (inscriptedWord) => {
    const checkWin = inscriptedWord !== "" && !inscriptedWord.includes("_");

    if (checkWin) {
      setWinStreak(winStreak + 1);
      setHideKeywordButton(false);
    }
    console.log(lifes);

    console.log(inscriptedWord);
    setGameWon(checkWin);
  };
  console.log(hideKeywordButton);

  return (
    //`keyboard_box${lifes}`
    <div className={keyboardBox}>
      <h1 className="gameOver winsGameOverYouwin" hidden={lifes !== 0}>
        Game Over
      </h1>
      <h1 className="youWin winsGameOverYouwin" hidden={!gameWon}>
        You Win!
      </h1>
      <h2 className="wins winsGameOverYouwin">Wins: {winStreak}</h2>
      <div className="buttons_box">
        <div className="resetAndLifesButton_box">
          <button
            className="reset_button resetAndNewKeyword_buttons"
            onClick={() => handleReset()}
          >
            reset
          </button>
          <button
            className="newKeyword resetAndNewKeyword_buttons"
            disabled={!gameWon && lifes !== 0}
            onClick={() => handleNewKeyword()}
            // disabled={hideKeywordButton}
          >
            New Keyword
          </button>
          <div className="lifes">Lifes remaning: {lifes}</div>
        </div>
        <div className="keyborad_buttons">
          {alphabet.map((character) => (
            <button
              className="letterButton"
              key={character}
              disabled={
                usedLetters.includes(character) || lifes === 0 || gameWon
              }
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
