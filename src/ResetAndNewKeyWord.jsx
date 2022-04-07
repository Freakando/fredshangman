import "./ResetAndNewKeyWord.css";

function ResetAndNewKeyWord({ handleReset, gameWon, lifes, handleNewKeyword }) {
  return (
    <div className="resetAndNewKeyWord__container">
      <button
        className="reset__button resetAndNewKeyWord__buttons"
        onClick={() => handleReset()}
      >
        Reset
      </button>
      <button
        className="newKeyword__button resetAndNewKeyWord__buttons"
        disabled={!gameWon && lifes !== 0}
        onClick={() => handleNewKeyword()}
      >
        New Keyword
      </button>
    </div>
  );
}

export default ResetAndNewKeyWord;
