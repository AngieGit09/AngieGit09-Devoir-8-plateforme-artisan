import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * Carte "artisan du mois" — affichage compact avec style Bootstrap
 */
export default function FeaturedArtisanCard({
  id,
  nom,
  note = 0,
  specialite,
  localisation,
}) {
  const noteFmt = Number(note || 0).toFixed(1);

  return (
    <article className="card text-center p-4 shadow-sm bg-success text-white border-0 rounded-4">
      <div className="card-body">
        {/* Nom */}
        <h3 className="card-title fw-bold">{nom}</h3>

        {/* Note : 4.5 / 5 ⭐ */}
        <div className="my-2">
          {noteFmt} / 5 <span className="text-warning">⭐</span>
        </div>

        {/* Spécialité */}
        <p className="mb-1">{specialite}</p>

        {/* Localisation */}
        <p className="mb-3">{localisation}</p>

        {/* Bouton vers fiche artisan */}
        <Link
          to={`/fiche-artisanss/${id}`}
          className="btn btn-primary text-uppercase fw-bold px-4 py-2 rounded-pill"
        >
          Voir le profil de l’artisan
        </Link>
      </div>
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
