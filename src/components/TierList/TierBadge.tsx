import { tierColors } from "../../data/tiers";
import type { Tier } from "../../types/game";

type TierBadgeProps = {
  tier: Tier;
};

const TierBadge = ({ tier }: TierBadgeProps) => {
  return (
    <div className={`grid w-20 shrink-0 place-items-center ${tierColors[tier]}`}>
      <span className="text-3xl font-black text-slate-900">{tier}</span>
    </div>
  );
};

export default TierBadge;
