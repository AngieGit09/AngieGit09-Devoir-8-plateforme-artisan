import { Link } from "react-router-dom";

export default function ArtisanCard({ artisan }) {
  const { id, nom, specialite, localisation, note_moyenne } = artisan;

  return (
    <article className="card" aria-labelledby={`art-${id}`}>
      <h2 id={`art-${id}`}>{nom}</h2>
      <p>
        {specialite} — {localisation}
      </p>
      <p aria-label="note">⭐ {Number(note_moyenne ?? 0).toFixed(1)} / 5</p>
      <Link to={`/fiche-artisan/${id}`} className="btn">
        Voir la fiche
      </Link>
    </article>
  );
}
