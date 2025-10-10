import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-primary text-white">
      <nav className="navbar navbar-expand-lg container">
        {/* Marque à gauche */}
        <Link className="navbar-brand text-white" to="/">
          <img
            src="/assets/logo.png"
            alt="Logo Trouve ton artisan"
            className="header-logo"
          />
        </Link>

        {/* Menu burger visible < 992px (mobile + tablet) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="mainNav" className="collapse navbar-collapse">
          {/*Pousse l’ensemble à droite */}
          <div className="ms-auto d-flex align-items-center gap-3">
            <img
              src="/assets/chercher.png"
              alt="Recherche"
              className="nav-loop-icon"
            />

            {/* Menu */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white"
                  to="/liste-artisans?cat=batiment"
                >
                  Bâtiment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white"
                  to="/liste-artisans?cat=services"
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white"
                  to="/liste-artisans?cat=fabrication"
                >
                  Fabrication
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white"
                  to="/liste-artisans?cat=alimentation"
                >
                  Alimentation
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
