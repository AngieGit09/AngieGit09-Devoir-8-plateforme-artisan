import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function Menu() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [params] = useSearchParams();

  function goTo(cat) {
    // Redirige vers la liste + conserve la recherche si saisie
    const q = new URLSearchParams();
    q.set("cat", String(cat));
    if (search.trim()) q.set("search", search.trim());
    navigate(`/liste-artisans?${q.toString()}`);
  }

  return (
    <main className="container py-4">
      {/* Barre haut : logo + loupe + “fermer” */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Link to="/" className="navbar-brand text-primary">
          <img
            src="/assets/logo.png"
            alt="Trouve ton artisan"
            style={{ height: 28 }}
          />
        </Link>
        <div className="d-flex align-items-center gap-3">
          <Link to="/recherche" className="btn btn-link p-0">
            <img
              src="/assets/chercher.png"
              alt="Recherche"
              style={{ height: 22 }}
            />
          </Link>
          <Link to="/" className="btn btn-outline-primary rounded-pill px-3">
            Fermer
          </Link>
        </div>
      </div>

      {/* Champ Rechercher */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <label htmlFor="q" className="form-label">
            Rechercher
          </label>
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

      {/* Footer compact */}
      <footer className="mt-5 py-4 bg-primary text-white rounded-4">
        <div className="container small">
          <div className="row g-4">
            <div className="col-12 col-md">
              <strong>Trouve ton artisan !</strong>
              <address className="mb-0">
                101 cours Charlemagne
                <br />
                CS 20033
                <br />
                69269 LYON CEDEX 02
                <br />
                +33 (0)4 26 73 40 00
              </address>
            </div>
            <div className="col">
              <ul className="list-unstyled mb-0">
                <li>
                  <Link
                    to="/mentions"
                    className="link-light text-decoration-none"
                  >
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link
                    to="/donnees"
                    className="link-light text-decoration-none"
                  >
                    Données personnelles
                  </Link>
                </li>
                <li>
                  <Link
                    to="/accessibilite"
                    className="link-light text-decoration-none"
                  >
                    Accessibilité
                  </Link>
                </li>
                <li>
                  <Link
                    to="/marches"
                    className="link-light text-decoration-none"
                  >
                    Marchés publics
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul className="list-unstyled mb-0">
                <li>
                  <Link
                    to="/presse"
                    className="link-light text-decoration-none"
                  >
                    Presse
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="link-light text-decoration-none"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cookies"
                    className="link-light text-decoration-none"
                  >
                    Politique des cookies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gestion-cookies"
                    className="link-light text-decoration-none"
                  >
                    Gestion des cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
