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
import photo1Night from "./images/hangmanNight1.png";
import photo2Night from "./images/hangmanNight2.png";
import photo3Night from "./images/hangmanNight3.png";
import photo4Night from "./images/hangmanNight4.png";
import photo5Night from "./images/hangmanNight5.png";
import photo6Night from "./images/hangmanNight6.png";
import photo7Night from "./images/hangmanNight7.png";

function Landscape({ numberOfLifes }) {
  const { dayTime, toggleTheme } = useContext(ThemeContext);

  let landscapePhoto = photo1;

  switch (true) {
    case numberOfLifes === 5 && dayTime:
      landscapePhoto = photo2;
      break;

    case numberOfLifes === 4 && dayTime:
      landscapePhoto = photo3;
      break;

    case numberOfLifes === 3 && dayTime:
      landscapePhoto = photo4;
      break;

    case numberOfLifes === 2 && dayTime:
      landscapePhoto = photo5;
      break;

    case numberOfLifes === 1 && dayTime:
      landscapePhoto = photo6;
      break;

    case numberOfLifes === 0 && dayTime:
      landscapePhoto = photo7;
      break;

    case numberOfLifes === 6 && !dayTime:
      landscapePhoto = photo1Night;
      break;

    case numberOfLifes === 5 && !dayTime:
      landscapePhoto = photo2Night;
      break;

    case numberOfLifes === 4 && !dayTime:
      landscapePhoto = photo3Night;
      break;

    case numberOfLifes === 3 && !dayTime:
      landscapePhoto = photo4Night;
      break;

    case numberOfLifes === 2 && !dayTime:
      landscapePhoto = photo5Night;
      break;

    case numberOfLifes === 1 && !dayTime:
      landscapePhoto = photo6Night;
      break;

    case numberOfLifes === 0 && !dayTime:
      landscapePhoto = photo7Night;
      break;

    default:
  }

  return (
    <div className="landScape_box">
      <img
        className="landScape_img"
        alt={"a tree, the hang and the sun"}
        src={landscapePhoto}
      ></img>
      <button onClick={toggleTheme}>Toggle day with night</button>
    </div>
  );
}

export default Landscape;
