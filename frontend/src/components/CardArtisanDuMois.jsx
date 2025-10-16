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
    <article className="artisan bg-success  text-white card text-center p-3 h-100">
      <div className="card-body">
        {/* Petit titre */}
        <h3 className="card-title h5 mb-2">{nom}</h3>
        {/* Note affichée avec un symbole étoile et la valeur */}
        <p className="mb-1">⭐ {noteFmt} / 5</p>
        {/* Spécialité et localisation sur une ligne */}
        <p className="text-white mb-3">
          {specialite} — {localisation}
        </p>
        {/* Lien vers la fiche (petit bouton) */}
        <Link
          to={`/fiche-artisan/${id}`}
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
