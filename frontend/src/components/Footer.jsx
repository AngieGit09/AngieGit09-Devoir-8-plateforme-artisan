import { Link } from "react-router-dom";

/**
 * Footer global du site
 * Contient logo, adresse et liens vers pages légales / contact.
 * Utilise des balises sémantiques (footer, address) pour l'accessibilité et le SEO.
 */

export default function Footer() {
  return (
    <footer className="mt-5 bg-primary text-white py-4">
      <div className="container">
        <div className="row gy-3">
          {/* Logo/brand */}
          <Link className="navbar-brand text-white" to="/">
            <img
              src="/assets/logo.png"
              alt="Trouve ton artisan"
              className="header-logo d-block mx-auto mb-2"
            />
          </Link>
          {/* Bloc adresse */}
          <div className="col-md">
            <address className="mb-0">
              101 cours Charlemagne
              <br />
              CS 20033
              <br />
              69026 LYON CEDEX 02
              <br />
              +33 (0)4 26 73 40 00
            </address>

            {/* Séparateur visible sur mobile */}
            <hr className="d-block d-md-none mx-auto my-5 border-2 border-white" />
          </div>

          {/* Bloc pages légales */}
          <div className="col-md">
            <ul className="list-unstyled m-0">
              <li>
                <Link
                  to="/mentions-legales"
                  className="text-white text-decoration-none"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  to="/donnees-personnelles"
                  className="text-white text-decoration-none"
                >
                  Données personnelles
                </Link>
              </li>
              <li>
                <Link
                  to="/accessibilite"
                  className="text-white text-decoration-none"
                >
                  Accessibilité : partiellement conforme
                </Link>
              </li>
              <li>
                <Link
                  to="/marches-publics"
                  className="text-white text-decoration-none"
                >
                  Marchés publics
                </Link>
              </li>
            </ul>
          </div>

          {/* Bloc liens supplémentaires */}
          <div className="col-md">
            <ul className="list-unstyled m-0">
              <li>
                <Link to="/presse" className="text-white text-decoration-none">
                  Presse
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-decoration-none">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-white text-decoration-none">
                  Politique des cookies
                </Link>
              </li>
              <li>
                <Link
                  to="/gestion-cookies"
                  className="text-white text-decoration-none"
                >
                  Gestion des cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
