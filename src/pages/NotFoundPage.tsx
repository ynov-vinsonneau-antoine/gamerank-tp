import ErrorState from "../components/ErrorState";
import BackLink from "../components/BackLink";

const NotFoundPage = () => {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <ErrorState
        code="404"
        title="Page introuvable"
        message="Cette adresse ne correspond à aucune page de GameRank. Elle a peut-être changé, ou le lien qui vous a amené ici est cassé."
      >
        <BackLink to="/">Retour à l'accueil</BackLink>
      </ErrorState>
    </div>
  );
};

export default NotFoundPage;
