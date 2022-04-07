import "./Landscape.css";
import { useContext } from "react";
import { ThemeContext } from "./contexts/Theme";

import photo1 from "./images/hangman1.png";
import photo2 from "./images/hangman2.png";
import photo3 from "./images/hangman3.png";
import photo4 from "./images/hangman4.png";
import photo5 from "./images/hangman5.png";
import photo6 from "./images/hangman6.png";
import photo7 from "./images/hangman7.png";
import photo8 from "./images/hangmanWin.png";
import photo1Night from "./images/hangmanNight1.png";
import photo2Night from "./images/hangmanNight2.png";
import photo3Night from "./images/hangmanNight3.png";
import photo4Night from "./images/hangmanNight4.png";
import photo5Night from "./images/hangmanNight5.png";
import photo6Night from "./images/hangmanNight6.png";
import photo7Night from "./images/hangmanNight7.png";
import photo8Night from "./images/hangmanNightWin.png";

const photoWin = photo8;
const photoWinNight = photo8Night;
const photoDays = [photo7, photo6, photo5, photo4, photo3, photo2, photo1];
const photoNight = [
  photo7Night,
  photo6Night,
  photo5Night,
  photo4Night,
  photo3Night,
  photo2Night,
  photo1Night,
];

function Landscape({ numberOfLifes, gameWon }) {
  const { dayTime, toggleTheme } = useContext(ThemeContext);

  const getPhoto = () => {
    if (dayTime) {
      return gameWon ? photoWin : photoDays[numberOfLifes];
    } else {
      return gameWon ? photoWinNight : photoNight[numberOfLifes];
    }
  };

  return (
    <div className="landScape__container">
      <img
        className="landScape__img"
        alt={"a tree, the hang and the sun"}
        src={getPhoto(dayTime, numberOfLifes, gameWon)}
      ></img>

      <button className="landScape__button" onClick={toggleTheme}>
        Toggle day with night
      </button>
    </div>
  );
}

export default Landscape;
