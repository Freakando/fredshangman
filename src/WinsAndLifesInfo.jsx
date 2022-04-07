import "./WinsAndLifesInfo.css";

function WinsAndLifesInfo({ winStreak, lifes }) {
  return (
    <div className="winsAndLifesInfo__container">
      <div className="wins__item">Wins: {winStreak}</div>
      <div className="lifes__item">Lifes: {lifes}</div>
    </div>
  );
}

export default WinsAndLifesInfo;
