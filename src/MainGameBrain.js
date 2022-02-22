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
  "papito",
];

function MainGameBrain() {
  // catchphrase to be guessed
  const [keyWord, setKeyword] = useState("");
  const [inscriptedWord, setInscriptedWord] = useState("");
  const undermark = "_ ";

  const inscriptWord = (word) => {
    const inscriptedCatchPhrase = word
      .replaceAll(" ", "\xa0\xa0")
      .replaceAll(/[a-z]/g, undermark);

    setInscriptedWord(inscriptedCatchPhrase);
  };

  const newKeyword = () => {
    const catchphrasesIndex = Math.floor(Math.random() * catchphrases.length);
    const catchphrase = catchphrases[catchphrasesIndex];
    console.log(catchphrase);
    setKeyword(catchphrase);
    inscriptWord(catchphrase);
  };

  useEffect(() => {
    newKeyword();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const reset = () => {
    inscriptWord(keyWord);
  };

  return (
    <div className="container_box">
      <div className="inscriptedWord_box">
        <div className="keyWord">{keyWord}</div>
        <div className="inscriptedWord">
          {inscriptedWord} {inscriptedWord.length / 2 + " letters"}
        </div>
      </div>
      <Keyboard
        newKeyword={newKeyword}
        reset={reset}
        keyword={keyWord}
        inscriptedWord={inscriptedWord}
        onInscriptedWordChange={(word) => setInscriptedWord(word)}
      />
    </div>
  );
}

export default MainGameBrain;
