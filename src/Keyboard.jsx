import "./Keyborad.css";

function Keyborad({ usedLetters, lifes, gameWon, handleOnClick }) {
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

  return (
    <div className="keyborad__container">
      <div className="keyborad__box">
        {alphabet.map((character) => (
          <button
            className="keyborad__button"
            key={character}
            disabled={usedLetters.includes(character) || lifes === 0 || gameWon}
            onClick={() => handleOnClick(character)} // dzieki funkcji bezimiennej handle on click razem z propsem wykona się po przekazaniu wyżej.
          >
            {character}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Keyborad;
