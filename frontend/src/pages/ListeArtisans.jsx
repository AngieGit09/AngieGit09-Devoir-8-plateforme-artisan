import { useEffect, useState } from "react";
import api from "../services/api";

export default function ListeArtisans() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    console.log("[ListeArtisans] mounted, fetching…");
    api
      .get("/api/liste-artisan")
      .then((res) => {
        console.log("[ListeArtisans] response:", res);
        setData(res.data);
      })
      .catch((e) => {
        console.error("[ListeArtisans] error:", e);
        setErr(e.message || "Erreur");
      });
  }, []);

  if (err) return <p role="alert">Erreur : {err}</p>;
  if (!data) return <p role="status">Chargement…</p>;

  return (
    <main>
      <h1>Liste des artisans</h1>
      <pre style={{ whiteSpace: "pre-wrap" }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  );
}
