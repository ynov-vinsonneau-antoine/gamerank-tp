import { useEffect } from "react";

/**
 * Met à jour le titre de l'onglet, et le remet à sa valeur d'origine
 * quand le composant disparaît. Une seule chose, réutilisable partout.
 */
const useDocumentTitle = (title: string) => {
  useEffect(() => {
    const previous = document.title;
    document.title = `${title} · Le Carnet`;

    return () => {
      document.title = previous;
    };
  }, [title]);
};

export default useDocumentTitle;
