import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav className="mb-8 flex gap-4 text-slate-50">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/tier-list"
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          Tier List
        </NavLink>
        <NavLink
          to="/a-propos"
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          À propos
        </NavLink>
      </nav>
      <Outlet />
      <footer className="mt-8 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} GameRank. Tous droits réservés.
      </footer>
    </div>
  );
};

export default Layout;
