import GameCardList from "../GameCardList";
import TierBadge from "./TierBadge";
import type { GameCardType, Tier } from "../../types/game";

type TierRowProps = {
  tier: Tier;
  games: GameCardType[];
};

const TierRow = ({ tier, games }: TierRowProps) => {
  return (
    <section className="flex overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
      <TierBadge tier={tier} />

      <div className="flex-1 p-3">
        {games.length > 0 ? (
          <GameCardList games={games} />
        ) : (
          <p className="grid h-full min-h-16 place-items-center text-sm text-slate-600">
            Aucun jeu à ce rang
          </p>
        )}
      </div>
    </section>
  );
};

export default TierRow;
