import { useEffect, useState } from "react";
import Keyboard from "./Keyboard";
import "./MainGameBrain.css";
const catchphrases = [
  "bearded dragon",
  "beaski",
  "beauceron",
  "beaver",
  "bedlington terrier",
  "beefalo",
  "beetle",
  "belgian shepherd",
  "belgian tervuren",
  "beluga sturgeon",
  "bengal tiger",
  "bergamasco",
  "berger picard",
  "bernedoodle",
  "bernese mountain dog",
  "bernese shepherd",
  "bichir",
  "bichpoo",
  "biewer terrier",
  "bighorn sheep",
  "bilby",
  "binturong",
  "bird",
  "bird of paradise",
  "birman",
  "bison",
  "black marlin",
];

function MainGameBrain() {
  // catchphrase to be guessed
  const [keyWord, setKeyword] = useState("");
  const [inscriptedWord, setInscriptedWord] = useState("");
  const undermark = "_ ";

  useEffect(() => {
    const catchphrasesIndex = Math.floor(Math.random() * catchphrases.length);
    const catchphrase = catchphrases[catchphrasesIndex];
    setKeyword(catchphrase);
    setInscriptedWord(
      undermark.repeat(catchphrase.replace(" ", "").length) +
        catchphrase.replace(" ", "").length +
        " letters"
    );
  }, []);

  // 1.after "keyWord" is selected, Display its all indexes  as "_".
  // 2. If the player guess correcly (you get true), change "_" to the orginal letter and in the right spot.
  // const letterVerificator = (letter) => {
  //   keyWord.includes(letter);
  // };

  // correct letters:
  // 1. If the letter is not pressent in the "keyword", return false
  // 2. Display that letter in the "wrongLetter"
  // 3. take one guess away
  // 4. draw a piece of gallow
  // 5. show You hang!

  // incorect letters
  // 1. if the letter is in the "keyword", return true
  // 2. take that letter out of the array.
  // 3. uveal that letter in its original index.
  // 4. when array is empty end game
  // 5. show You Win!

  return (
    <div className="container_box">
      <div className="inscriptedWord_box">
        <div className="keyWord">{keyWord}</div>
        <div className="inscriptedWord">{inscriptedWord}</div>
      </div>
      <Keyboard
        keyword={keyWord}
        inscriptedWord={inscriptedWord}
        onInscriptedWordChange={(word) => setInscriptedWord(word)}
      />
    </div>
  );
}

export default MainGameBrain;
