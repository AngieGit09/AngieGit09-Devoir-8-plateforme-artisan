// Import des outils de navigation et des hooks React
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import Seo from "../components/Seo";

// Composant du menu principal
export default function Menu() {
  // Hook de navigation pour rediriger vers une autre page
  const navigate = useNavigate();

  // État local pour stocker le texte de recherche
  const [search, setSearch] = useState("");

  // Permet de lire les paramètres actuels de l’URL
  const [params] = useSearchParams();

  // Fonction pour naviguer vers la liste d’artisans en fonction de la catégorie
  function goTo(cat) {
    // Crée une nouvelle instance d’URLSearchParams pour gérer les paramètres
    const q = new URLSearchParams();
    q.set("cat", String(cat));
    if (search.trim()) q.set("search", search.trim());
    // Redirige vers la page "liste-artisans"
    navigate(`/liste-artisans?${q.toString()}`);
  }

  return (
    <>
      {/* Informations SEO pour la page menu ouvert (mobile et tablet) */}
      <Seo
        title="Menu"
        description="Selectionnez la categorie parmi bâtiment, services, fabrication ou alimentation que vous souhaitez."
      />
      <main className="container py-4">
        {/* Barre haut : logo + loupe + “fermer” */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <Link to="/" className="btn btn-outline-primary rounded-pill px-3">
            Fermer
          </Link>
        </div>

        {/* Champ Rechercher */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body">
            <div className="input-group">
              <input
                id="q"
                className="form-control"
                placeholder="Rechercher un artisan…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                className="btn btn-primary"
                onClick={() => goTo(params.get("cat") || 1)}
              >
                Rechercher
              </button>
            </div>
          </div>
        </div>

        {/* Blocs catégories (style “accordéon simple”) */}
        <div className="vstack gap-3">
          <button
            className="btn btn-light text-start border"
            onClick={() => goTo(1)}
          >
            Bâtiment
          </button>
          <button
            className="btn btn-light text-start border"
            onClick={() => goTo(2)}
          >
            Services
          </button>
          <button
            className="btn btn-light text-start border"
            onClick={() => goTo(3)}
          >
            Fabrication
          </button>
          <button
            className="btn btn-light text-start border"
            onClick={() => goTo(4)}
          >
            Alimentation
          </button>
        </div>
      </main>
    </>
  );
}
