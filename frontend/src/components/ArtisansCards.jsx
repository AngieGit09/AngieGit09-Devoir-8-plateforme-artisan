import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Carte artisan réutilisable
 * Props :
 *  - id           : number | string  (pour le lien vers la fiche)
 *  - nom          : string
 *  - note         : number (0 → 5, décimal OK)
 *  - specialite   : string
 *  - localisation : string
 */

// Composant principal : affiche une carte résumée d'un artisan
export default function ArtisansCards({
  id,
  nom,
  note = 0,
  specialite,
  localisation,
}) {
  // Calcul simple pour afficher des étoiles :
  // full = nombre d'étoiles pleines (partie entière)
  // half = si la partie décimale >= 0.5
  const full = Math.floor(note);
  const half = note - full >= 0.5;
  // Génère une chaîne de 5 caractères représentant les étoiles
  const stars = Array.from({ length: 5 }, (_, i) => {
    if (i < full) return "★";
    if (i === full && half) return "☆";
    return "☆";
  }).join("");

  return (
    // article pour signifier une unité sémantique
    <article className="artisan-card" aria-label={`Artisan ${nom}`}>
      <div className="artisan-card__content">
        <h3 className="artisan-card__name">{nom}</h3>

        <div
          className="artisan-card__rating"
          aria-label={`Note ${note} sur 5`}
          title={`Note ${note}/5`}
        >
          <span className="artisan-card__stars">{stars}</span>
          <span className="artisan-card__value">{Number(note).toFixed(1)}</span>
        </div>

        <p className="artisan-card__spec">{specialite}</p>
        <p className="artisan-card__city">{localisation}</p>

        <Link
          to={`/fiche-artisans/${id}`}
          className="btn btn-primary artisan-card__cta"
          aria-label={`Voir la fiche de ${nom}`}
        >
          Cliquer ici pour voir le profil de l’artisan
        </Link>
      </div>
    </article>
  );
}

ArtisansCards.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  nom: PropTypes.string.isRequired,
  note: PropTypes.number,
  specialite: PropTypes.string.isRequired,
  localisation: PropTypes.string.isRequired,
};
