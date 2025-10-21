import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * Carte "artisans du mois" — mise en avant
 */

export default function FeaturedArtisanCard({
  id,
  nom,
  note = 0,
  specialite,
  localisation,
}) {
  // Formatage de la note
  const noteFmt = Number(note ?? 0).toFixed(1);

  return (
    <article className="artisan bg-success text-white card text-center p-3 h-100">
      <div className="card-body">
        {/* Nom */}
        <h3 className="card-title h5 mb-2">{nom}</h3>

        {/* Note affichée avec étoile */}
        <p className="mb-1">⭐ {noteFmt} / 5</p>

        {/* Spécialité + Localisation */}
        <p className="text-white mb-3">
          {specialite} — {localisation}
        </p>

        {/* Bouton voir la fiche */}
        <Link
          to={`/fiche-artisanss/${id}`} // ✅ Correction ici : ajout du "s"
          className="btn btn-primary btn-sm rounded-pill"
        >
          Voir la fiche
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
