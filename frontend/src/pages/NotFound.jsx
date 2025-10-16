import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Error 404"
        description="Erreur la page que vous souhaitez n'est pas disponible."
      />
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
        <h1 className="text-uppercase fw-medium mb-4">Page non trouvée</h1>

        {/* Bouton retour */}
        <div className="text-center text-white">
          <Link
            to="/"
            className="btn btn-primary notfound-btn"
            aria-label="Retourner à la page d’accueil"
          >
            RETOUR PAGE D’ACCUEIL
          </Link>
        </div>
      </main>
    </>
  );
}
