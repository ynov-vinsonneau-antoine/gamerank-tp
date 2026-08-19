import TierRow from "./TierRow";
import { tiers } from "../../data/tiers";
import type { GameCardType } from "../../types/game";

type TierListProps = {
  games: GameCardType[];
};

const TierList = ({ games }: TierListProps) => {
  return (
    <div className="flex flex-col gap-3">
      {tiers.map((tier) => (
        <TierRow
          key={tier}
          tier={tier}
          games={games.filter((game) => game.note === tier)}
        />
      ))}
    </div>
  );
};

export default TierList;
