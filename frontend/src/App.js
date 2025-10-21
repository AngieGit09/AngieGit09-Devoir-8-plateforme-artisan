import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/App.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Accueil from "./pages/Accueil";
import Menu from "./pages/Menu";
import Recherche from "./pages/Recherche";
import ListeArtisans from "./pages/ListeArtisans";
import FicheArtisans from "./pages/FicheArtisans";

import MentionsLegales from "./pages/PagesConstructions/MentionsLegales";
import DonneesPersonnelles from "./pages/PagesConstructions/DonneesPersonnelles";
import Accessibilite from "./pages/PagesConstructions/Accessibilite";
import Cookies from "./pages/PagesConstructions/Cookies";
import Contact from "./pages/PagesConstructions/Contact";
import MarchesPublics from "./pages/PagesConstructions/MarchesPublics";
import Presse from "./pages/PagesConstructions/Presse";
import PolitiqueCookies from "./pages/PagesConstructions/PolitiqueCookies";

import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/recherche" element={<Recherche />} />
        <Route path="/liste-artisans/:categorie?" element={<ListeArtisans />} />
        <Route path="/fiche-artisans/:id" element={<FicheArtisans />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/donnees-personnelles" element={<DonneesPersonnelles />} />
        <Route path="/accessibilite" element={<Accessibilite />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/politique-des-cookies" element={<PolitiqueCookies />} />
        <Route path="/presse" element={<Presse />} />
        <Route path="/marche-publics" element={<MarchesPublics />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
