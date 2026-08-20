import BackLink from "../components/BackLink";
import EmptyState from "../components/EmptyState";
import useDocumentTitle from "../hooks/useDocumentTitle";

const NotFoundPage = () => {
  useDocumentTitle("Page introuvable");

  return (
    <EmptyState
      code="404"
      title="Page introuvable"
      message="Cette adresse ne correspond à aucune page du carnet. Elle a peut-être changé, ou le lien qui vous a amené ici est cassé."
    >
      <BackLink to="/">Retour à l'accueil</BackLink>
    </EmptyState>
  );
};

export default NotFoundPage;
