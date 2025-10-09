import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Accueil from "./pages/Accueil";
import ListeArtisans from "./pages/ListeArtisans";
import FicheArtisans from "./pages/FicheArtisans";
import NotFound from "./pages/NotFound";
import "./style/App.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/liste-artisans" element={<ListeArtisans />} />
        <Route path="/fiche-artisan/:id" element={<FicheArtisans />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
