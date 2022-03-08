function WinsAndLifesInfo({ winStreak, lifes }) {
  return (
    <div>
      <div className="wins">Wins: {winStreak}</div>
      <div className="lifes">Lifes: {lifes}</div>
    </div>
  );
}

export default WinsAndLifesInfo;
