function KeyboardButtons({ usedLetters, lifes, gameWon, handleOnClick }) {
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
    <div className="keyborad_buttons">
      {alphabet.map((character) => (
        <button
          className="letterButton"
          key={character}
          disabled={usedLetters.includes(character) || lifes === 0 || gameWon}
          onClick={() => handleOnClick(character)} // dzieki funkcji bezimiennej handle on click razem z propsem wykona się po przekazaniu wyżej.
        >
          {character}
        </button>
      ))}
    </div>
  );
}

export default KeyboardButtons;
