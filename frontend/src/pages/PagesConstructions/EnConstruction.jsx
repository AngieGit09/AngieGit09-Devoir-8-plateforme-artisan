export default function EnConstruction({ titre = "Page en construction" }) {
  return (
    <main className="container py-5">
      <h1 className="h4 mb-3">{titre}</h1>
      <p>Cette page sera prochainement complétée par un cabinet spécialisé.</p>
      <p className="text-muted">Merci de votre compréhension.</p>
    </main>
  );
}
