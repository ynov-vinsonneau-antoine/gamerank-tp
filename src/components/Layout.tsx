import { NavLink, Outlet } from "react-router-dom";

const links = [
  { to: "/", label: "Accueil", end: true },
  { to: "/recettes", label: "Les recettes", end: false },
  { to: "/categorie/dessert", label: "Desserts", end: false },
];

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#FFFBF7] text-zinc-900">
      <header className="sticky top-0 z-10 border-b border-zinc-200/80 bg-white/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-6 px-6 py-3">
          <NavLink to="/" className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-[12px] bg-linear-to-br from-orange-400 to-orange-600 text-[15px] font-extrabold text-white">
              C
            </span>
            <span className="text-[17px] font-extrabold tracking-tight">
              Le Carnet
            </span>
          </NavLink>

          <nav className="flex items-center gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `rounded-xl px-3.5 py-2 text-[14px] font-bold transition-colors ${
                    isActive
                      ? "bg-orange-50 text-orange-600"
                      : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">
        <Outlet />
      </main>

      <footer className="border-t border-zinc-200/80 bg-white">
        <div className="mx-auto w-full max-w-5xl px-6 py-6 text-[13px] font-medium text-zinc-400">
          Le Carnet — projet de référence React, TypeScript et React Router.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
