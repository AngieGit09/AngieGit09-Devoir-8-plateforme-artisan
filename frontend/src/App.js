import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Menu from "./pages/Menu";
import Accueil from "./pages/Accueil";
import ListeArtisans from "./pages/ListeArtisans";
import FicheArtisans from "./pages/FicheArtisans";
import NotFound from "./pages/NotFound";
import Recherche from "./pages/Recherche";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style/App.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/recherche" element={<Recherche />} />
        <Route path="/liste-artisans" element={<ListeArtisans />} />
        <Route path="/fiche-artisan/:id" element={<FicheArtisans />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
