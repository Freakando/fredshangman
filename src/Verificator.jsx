import "./Verificator.css";
import "./Landscape";

import { useState, useContext } from "react";
import Landscape from "./Landscape";
import WinsAndLifesInfo from "./WinsAndLifesInfo";
import ResetAndNewKeyWord from "./ResetAndNewKeyWord";
import Keyborad from "./Keyboard";
import GameWinOrOverInfo from "./GameWinOrOverInfo";
import { CatchwordGeneratorContext } from "./contexts/CatchwordGenerator";

function getAllIndexes(arr, val) {
  let indexes = [],
    i;
  for (i = 0; i < arr.length; i++) if (arr[i] === val) indexes.push(i);
  return indexes;
}

function Verificator() {
  const {
    newKeyword,
    reset,
    keyword,
    inscriptedWord,
    onInscriptedWordChange,
    inscriptedWordDisplay,
  } = useContext(CatchwordGeneratorContext);

  const [usedLetters, setUsedLetters] = useState("");
  const [lifes, setLifes] = useState(6);
  const [winStreak, setWinStreak] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  const handleOnClick = (letter) => {
    setUsedLetters(usedLetters + letter);
    const guesses = getAllIndexes(keyword, letter);

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
  };

  const handleReset = () => {
    resetProperties();
    reset();
    setWinStreak(0);
  };

  const handleNewKeyword = () => {
    resetProperties();
    newKeyword();
  };
  const handleWin = (inscriptedWord) => {
    const checkWin = inscriptedWord !== "" && !inscriptedWord.includes("_");

    if (checkWin) {
      setWinStreak(winStreak + 1);
    }
    console.log(lifes);

    console.log(inscriptedWord);
    setGameWon(checkWin);
  };

  return (
    <div className="verificator__container">
      <Landscape numberOfLifes={lifes} gameWon={gameWon} />
      <div className="verificator__inscripitedWord">
        {inscriptedWordDisplay}
      </div>
      <GameWinOrOverInfo lifes={lifes} gameWon={gameWon} />
      <WinsAndLifesInfo winStreak={winStreak} lifes={lifes} />
      <ResetAndNewKeyWord
        handleReset={handleReset}
        gameWon={gameWon}
        lifes={lifes}
        handleNewKeyword={handleNewKeyword}
      />
      <Keyborad
        usedLetters={usedLetters}
        lifes={lifes}
        gameWon={gameWon}
        handleOnClick={handleOnClick}
      />
    </div>
  );
}

export default Verificator;
