import type { Tier } from "../types/game";

export const tiers: Tier[] = ["S", "A", "B", "C", "D"];

export const tierColors: Record<Tier, string> = {
  S: "bg-rose-500",
  A: "bg-orange-500",
  B: "bg-amber-400",
  C: "bg-lime-400",
  D: "bg-sky-400",
};
