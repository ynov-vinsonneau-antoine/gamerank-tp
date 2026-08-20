import TierBadge from "./TierList/TierBadge";
import InfoRow from "./InfoRow";
import type { GameCardType } from "../types/game";

type GameDetailCardProps = {
  game: GameCardType;
};

const GameDetailCard = ({ game }: GameDetailCardProps) => {
  const dateDeSortie = new Date(game.releaseDate).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
      <header className="flex">
        <TierBadge tier={game.note} />

        <div className="flex-1 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            {game.name}
          </h1>
          <p className="mt-1 text-sm text-slate-400">{game.studio}</p>
        </div>
      </header>

      <dl className="border-t border-slate-800 px-6 py-2">
        <InfoRow label="Date de sortie" value={dateDeSortie} />
        <InfoRow label="Rang" value={game.note} />
        <InfoRow label="Identifiant dans l'URL" value={game.slug} />
      </dl>
    </article>
  );
};

export default GameDetailCard;
