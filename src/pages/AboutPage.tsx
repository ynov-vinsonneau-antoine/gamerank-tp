const AboutPage = () => {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-white">
          À propos
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Ce que fait GameRank, et comment il est construit.
        </p>
      </header>

      <div className="flex flex-col gap-3">
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="mb-2 font-semibold text-slate-50">Le projet</h2>
          <p className="text-sm text-slate-400">
            GameRank classe des jeux par rang, du S au D. Les données sont
            locales et typées : aucun appel réseau, tout tient dans un tableau.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="mb-2 font-semibold text-slate-50">La technique</h2>
          <p className="text-sm text-slate-400">
            React et TypeScript avec Vite, Tailwind CSS pour le style, et
            React Router pour passer d'une page à l'autre sans recharger.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
