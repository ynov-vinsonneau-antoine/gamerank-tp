import { useParams } from "react-router-dom";
import { gameList } from "../data/games";
import GameDetailCard from "../components/GameDetailCard";
import ErrorState from "../components/ErrorState";
import BackLink from "../components/BackLink";

const GameDetailPage = () => {
  const { slug } = useParams();

  const game = gameList.find((g) => g.slug === slug);

  if (!game) {
    return (
      <div className="mx-auto w-full max-w-3xl">
        <ErrorState
          code="404"
          title="Ce jeu n'existe pas"
          message={`Aucun jeu ne correspond à « ${slug} ». L'adresse comporte peut-être une faute de frappe.`}
        >
          <BackLink to="/tier-list">Retour à la tier list</BackLink>
        </ErrorState>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
      <BackLink to="/tier-list">Retour à la tier list</BackLink>

      <GameDetailCard game={game} />
    </div>
  );
};

export default GameDetailPage;
