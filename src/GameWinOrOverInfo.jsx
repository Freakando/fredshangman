import "./GameWinOrOverInfo.css";

function GameWinOrOverInfo({ lifes, gameWon }) {
  return (
    <div className="gameWinOrOverInfo__container">
      <div className="gameOver gameWinOrOverInfo__item" hidden={lifes !== 0}>
        Game Over
      </div>

      <div className="youWin gameWinOrOverInfo__item" hidden={!gameWon}>
        You Win!
      </div>
    </div>
  );
}

export default GameWinOrOverInfo;
