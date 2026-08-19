import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TierListPage from "./pages/TierListPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-slate-900 p-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tier-list" element={<TierListPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
