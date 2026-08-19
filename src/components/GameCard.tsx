import type { GameCardType } from "../types/game";

const GameCard = (game: GameCardType) => {
  return (
    <div className="flex items-center gap-3">
      <span className="">{game.note}</span>
      <div>
        <h2 className="font-semibold text-slate-50">{game.name}</h2>
        <p className="text-sm text-white">
          {game.studio} · {game.releaseDate}
        </p>
      </div>
    </div>
  );
};

export default GameCard;
