import { useEffect, useState } from "react";
import api from "../services/api";
import ArtisanCard from "../components/ArtisanCard";
/** @typedef {import('../types').Artisan} Artisan */

export default function ListeArtisans() {
  /** @type {[Artisan[]|null, (v: Artisan[]|null)=>void]} */
  const [data, setData] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    api
      .get("/api/liste-artisan")
      .then((res) => setData(res.data))
      .catch((e) => setErr(e.message || "Erreur"));
  }, []);

  if (err)
    return (
      <p role="alert" className="container mt-4">
        Erreur : {err}
      </p>
    );
  if (!data)
    return (
      <p role="status" className="container mt-4">
        Chargement…
      </p>
    );

  return (
    <main className="container my-4">
      <h1 className="h3 mb-3">Liste des artisans</h1>
      {data.map((a) => (
        <ArtisanCard key={a.id} artisan={a} />
      ))}
    </main>
  );
}
