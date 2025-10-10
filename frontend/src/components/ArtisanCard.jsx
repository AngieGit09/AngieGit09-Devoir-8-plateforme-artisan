import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
    <article className="artisan bg-primary  text-white card text-center p-3 h-100">
      <div className="card-body">
        <h3 className="card-title h5 mb-2">{nom}</h3>
        <p className="mb-1">⭐ {noteFmt} / 5</p>
        <p className="text-white mb-3">
          {specialite} — {localisation}
        </p>
        <Link
          to={`/fiche-artisan/${id}`}
          className="btn btn-success btn-sm rounded-pill"
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
