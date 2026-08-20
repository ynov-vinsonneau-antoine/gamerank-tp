import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TierListPage from "./pages/TierListPage";
import AboutPage from "./pages/AboutPage";
import Layout from "./components/layout";
import GameDetailPage from "./pages/GameDatailPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-slate-900 p-8">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="tier-list" element={<TierListPage />} />
            <Route path="a-propos" element={<AboutPage />} />
            <Route path="jeu/:slug" element={<GameDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
