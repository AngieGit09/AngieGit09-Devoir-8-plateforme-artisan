import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="notfound container my-5">
      {/* Illustration */}
      <div className="text-center mb-4">
        <img
          src="/assets/warning-8908707_1280.png"
          alt="Erreur 404 : page non trouvée"
          className="notfound-img img-fluid"
        />
      </div>

      {/* Titre */}
      <h1 className="text-center h3 mb-3">Page non trouvée</h1>

      {/* Bouton retour */}
      <div className="text-center">
        <Link
          to="/"
          className="btn btn-primary notfound-btn"
          aria-label="Retourner à la page d’accueil"
        >
          RETOUR PAGE D’ACCUEIL
        </Link>
      </div>
    </main>
  );
}
