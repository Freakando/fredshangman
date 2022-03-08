function ResAndNewKeyWord({ handleReset, gameWon, lifes, handleNewKeyword }) {
  return (
    <div className="resetAndLifesButton_box">
      <button
        className="reset_button resetAndNewKeyword_buttons"
        onClick={() => handleReset()}
      >
        Reset
      </button>
      <button
        className="newKeyword resetAndNewKeyword_buttons"
        disabled={!gameWon && lifes !== 0}
        onClick={() => handleNewKeyword()}
      >
        New Keyword
      </button>
    </div>
  );
}

export default ResAndNewKeyWord;
