import React from "react";
import Seo from "../components/Seo";

function Recherche() {
  return (
    <>
      <Seo
        title="Rechercher un artisan"
        description="Rechercher votre artisan depuis la barre de recherche."
      />
      <main className="container py-5 text-center d-flex flex-column justify-content-center">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="mb-4 fw-medium">Rechercher</h1>

            {/* Champ de recherche avec icône intégrée */}
            <div className="position-relative">
              <i
                className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
                style={{ pointerEvents: "none" }}
              ></i>
              <input
                type="text"
                className="form-control rounded-pill ps-5 border-0 shadow-sm"
                placeholder="Rechercher un artisan..."
                style={{ backgroundColor: "#fff" }}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Recherche;
