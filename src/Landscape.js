import "./Landscape.css";

import photo1 from "./images/hangman1.png";
import photo2 from "./images/hangman2.png";
import photo3 from "./images/hangman3.png";
import photo4 from "./images/hangman4.png";
import photo5 from "./images/hangman5.png";
import photo6 from "./images/hangman6.png";
import photo7 from "./images/hangman7.png";

let landscapePhoto = photo1;

function Landscape({ numberOfLives }) {
  if (numberOfLives === 5) {
    landscapePhoto = photo2;
  } else if (numberOfLives === 4) {
    landscapePhoto = photo3;
  } else if (numberOfLives === 3) {
    landscapePhoto = photo4;
  } else if (numberOfLives === 2) {
    landscapePhoto = photo5;
  } else if (numberOfLives === 1) {
    landscapePhoto = photo6;
  } else if (numberOfLives === 0) {
    landscapePhoto = photo7;
  } else if (numberOfLives === 6) {
    landscapePhoto = photo1;
  }

  console.log(numberOfLives);
  // console.log(landscapePhoto);

  return (
    <div className="landScape_box">
      <img
        className="landScape_img"
        alt={"a tree, the hang and the sun"}
        src={landscapePhoto}
      ></img>
    </div>
  );
}

export default Landscape;
