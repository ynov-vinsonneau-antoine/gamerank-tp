import type { GameCardType } from "../types/game";

const GameCard = (game: GameCardType) => {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-slate-800 p-4 transition-colors hover:bg-slate-700">
      <span className="grid h-10 w-10 place-items-center rounded-lg bg-violet-500 font-bold text-slate-900">
        {game.note}
      </span>
      <div>
        <h2 className="font-semibold text-slate-50">{game.name}</h2>
        <p className="text-sm text-slate-400">
          {game.studio} · {game.releaseDate}
        </p>
      </div>
    </div>
  );
};

export default GameCard;
