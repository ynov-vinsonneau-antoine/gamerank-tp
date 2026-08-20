import GameCard from "./GameCard";
import type { GameCardType } from "../types/game";
import { Link } from "react-router-dom";

type GameCardListProps = {
  games: GameCardType[];
};

const GameCardList = ({ games }: GameCardListProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      {games.map((game) => (
        <Link to={`/jeu/${game.slug}`} key={game.id}>
          <GameCard {...game} />
        </Link>
      ))}
    </div>
  );
};

export default GameCardList;
