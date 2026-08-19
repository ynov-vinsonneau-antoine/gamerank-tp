import GameCard from "./GameCard";
import type { GameCardType } from "../types/game";

type GameCardListProps = {
  games: GameCardType[];
};

const GameCardList = ({ games }: GameCardListProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      {games.map((game) => (
        <GameCard key={game.id} {...game} />
      ))}
    </div>
  );
};

export default GameCardList;
