import { gameList } from "../data/games";
import GameCard from "./GameCard";
import type { GameCardType } from "../types/game";

const GameCardList = () => {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-3">
      {gameList.map((game: GameCardType) => (
        <GameCard key={game.id} {...game} />
      ))}
    </div>
  );
};

export default GameCardList;
