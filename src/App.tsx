import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TierListPage from "./pages/TierListPage";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-slate-900 p-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tier-list" element={<TierListPage />} />
          <Route path="/a-propos" element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
