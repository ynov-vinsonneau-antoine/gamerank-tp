import type { GameCardType } from "../types/game";

const GameCard = (game: GameCardType) => {
  return (
    <article className="rounded-xl bg-slate-800 px-4 py-3 transition-colors hover:bg-slate-700">
      <h2 className="font-semibold text-slate-50">{game.name}</h2>
      <p className="text-sm text-slate-400">
        {game.studio} · {game.releaseDate.slice(0, 4)}
      </p>
    </article>
  );
};

export default GameCard;
