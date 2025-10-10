export default function Footer() {
  return (
    <footer className="mt-5 bg-primary text-white py-4">
      <div className="container">
        <div className="row gy-3">
          <div className="col-md">
            <div className="fw-bold mb-2">Trouve ton artisan !</div>
            <div>
              101 cours Charlemagne
              <br />
              CS 20033
              <br />
              69026 LYON CEDEX 02
              <br />
              +33 (0)4 26 73 40 00
            </div>
          </div>
          <div className="col-md">
            <ul className="list-unstyled m-0">
              <li>Mentions légales</li>
              <li>Données personnelles</li>
              <li>Accessibilité : partiellement conforme</li>
              <li>Marchés publics</li>
            </ul>
          </div>
          <div className="col-md">
            <ul className="list-unstyled m-0">
              <li>Presse</li>
              <li>Contact</li>
              <li>Politique des cookies</li>
              <li>Gestion des cookies</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
