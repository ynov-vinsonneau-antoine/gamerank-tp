import TierList from "../components/TierList/TierList";
import { gameList } from "../data/games";

const TierListPage = () => {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-white">
          Tier list
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          {gameList.length} jeux classés, du meilleur au reste.
        </p>
      </header>

      <TierList games={gameList} />
    </div>
  );
};

export default TierListPage;
