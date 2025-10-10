import React from "react";

function Recherche() {
  return (
    <main className="container py-5 text-center">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="mb-4 fw-bold">Rechercher</h1>

          <form className="d-flex justify-content-center align-items-center bg-white rounded-pill shadow-sm p-3">
            <input
              type="text"
              className="form-control border-0 rounded-pill me-2"
              placeholder="Rechercher un artisan..."
              style={{ backgroundColor: "transparent", boxShadow: "none" }}
            />
            <button
              type="submit"
              className="btn btn-primary rounded-circle px-3"
            >
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Recherche;
