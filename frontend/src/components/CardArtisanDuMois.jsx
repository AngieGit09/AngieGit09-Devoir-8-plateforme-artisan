import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * Carte "artisans du mois" — mise en avant
 * Props : idem (id, nom, note, specialite, localisation)
 * Utilisée pour afficher un style plus compact / accentué (ex: card verte)
 */

//artisan du mois
export default function FeaturedArtisanCard({
  id,
  nom,
  note = 0,
  specialite,
  localisation,
}) {
  const noteFmt = Number(note ?? 0).toFixed(1);

  return (
    <article
      className="card text-center p-4 shadow-sm border-0 bg-success text-white rounded-4"
      aria-label={`Artisan ${nom}`}
    >
      {/* Nom */}
      <h3 className="card-title fw-bold">{nom}</h3>

      {/* Note */}
      <div className="my-2">
        <span className="me-1">{Number(note).toFixed(1)}</span>
        <span>⭐</span>
      </div>

      {/* Spécialité + Localisation */}
      <p className="mb-1">{specialite}</p>
      <p className="mb-3">{localisation}</p>

      {/* Bouton */}
      <button
        onClick={onClick}
        className="btn btn-primary text-uppercase fw-bold px-4 py-2 rounded-pill"
      >
        Voir le profil de l’artisan
      </button>
    </article>
  );
}

FeaturedArtisanCard.propTypes = {
  id: PropTypes.number.isRequired,
  nom: PropTypes.string.isRequired,
  note: PropTypes.number,
  specialite: PropTypes.string.isRequired,
  localisation: PropTypes.string.isRequired,
};
