import { useEffect, useState, createContext } from "react";
// import Verificator from "../Verificator";
// import "./CatchwordGenerator.css";
// import CatchWordGenerator from "../App";

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

export const CatchwordGeneratorContext = createContext();

const CatchwordGenerator = (props) => {
  // catchphrase to be guessed
  const [keyword, setKeyword] = useState("");
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
    inscriptWord(keyword);
  };
  const onInscriptedWordChange = (word) => setInscriptedWord(word);

  const inscriptedWordDisplay = `${inscriptedWord} ${
    inscriptedWord.length / 2 + " letters"
  }`;

  return (
    <CatchwordGeneratorContext.Provider
      value={{
        newKeyword,
        reset,
        keyword,
        inscriptedWord,
        onInscriptedWordChange,
        inscriptedWordDisplay,
      }}
    >
      {props.children}
    </CatchwordGeneratorContext.Provider>
  );
};

export default CatchwordGenerator;
