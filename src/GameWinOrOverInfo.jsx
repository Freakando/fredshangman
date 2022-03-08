function GameWinOrOverInfo({ lifes, gameWon }) {
  return (
    <div>
      <div className="gameOver winsGameOverYouwin" hidden={lifes !== 0}>
        Game Over
      </div>

      <div className="youWin winsGameOverYouwin" hidden={!gameWon}>
        You Win!
      </div>
    </div>
  );
}

export default GameWinOrOverInfo;
