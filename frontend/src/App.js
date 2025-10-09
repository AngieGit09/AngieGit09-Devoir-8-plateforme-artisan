import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/App.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Accueil from "./pages/Accueil";
import ListeArtisans from "./pages/ListeArtisans";
import FicheArtisan from "./pages/FicheArtisans";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="container py-3">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/liste-artisans" element={<ListeArtisans />} />
            <Route path="/fiche-artisan/:id" element={<FicheArtisan />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
