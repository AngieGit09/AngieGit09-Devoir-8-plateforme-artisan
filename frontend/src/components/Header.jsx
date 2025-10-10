import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-primary text-white">
      <nav className="navbar navbar-expand-lg container">
        {/* Logo à gauche */}
        <Link className="navbar-brand text-white" to="/">
          <img
            src="/assets/logo.png"
            alt="Trouve ton artisan"
            className="header-logo"
          />
        </Link>

        {/* Bloc à droite : loupe + menu */}
        <div className="ms-auto d-flex align-items-center gap-3">
          {/* Icône recherche */}
          <Link to="/recherche" className="nav-link p-0">
            <img
              src="/assets/chercher.png"
              alt="Recherche"
              className="nav-loop-icon"
              style={{ width: 22, height: 22 }}
            />
          </Link>

          {/* Burger (visible uniquement sur mobile) */}
          <Link
            to="/menu"
            className="navbar-toggler d-lg-none p-2 border-0"
            aria-label="Ouvrir le menu"
          >
            <span className="navbar-toggler-icon" />
          </Link>

          {/* Menu visible dès lg */}
          <div className="collapse navbar-collapse d-none d-lg-block">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  to="/liste-artisans?cat=1"
                  className="nav-link text-white"
                >
                  Bâtiment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/liste-artisans?cat=2"
                  className="nav-link text-white"
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/liste-artisans?cat=3"
                  className="nav-link text-white"
                >
                  Fabrication
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/liste-artisans?cat=4"
                  className="nav-link text-white"
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
