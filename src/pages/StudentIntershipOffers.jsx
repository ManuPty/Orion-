import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import CompanyCard from "../components/CompanyCard.jsx";
import FilterBar from "../components/FilterBar.jsx";
import companiesData from "../data/companies.json";

export default function StudentIntershipOffers() {
  const [studentName] = useState(() => localStorage.getItem("studentName") || "Estudiante");
  const [query, setQuery] = useState("");
  const [area, setArea] = useState("");

  const areas = useMemo(
    () => companiesData.flatMap(c => c.practiceAreas || []),
    []
  );

  const filtered = useMemo(() => {
    return companiesData.filter(c => {
      const q = query.trim().toLowerCase();
      const matchQuery =
        q === "" ||
        c.name.toLowerCase().includes(q) ||
        c.shortDescription.toLowerCase().includes(q);
      const matchArea = area === "" || (c.practiceAreas || []).includes(area);
      return matchQuery && matchArea;
    });
  }, [query, area]);

  useEffect(() => {
    document.title = "Ofertas de Práctica — Orion";
  }, []);

  return (
    <div className="page">
      <Navbar studentName={studentName} />
      <main className="container">
        <h1 className="h1">Ofertas de Práctica</h1>
        <FilterBar
          query={query}
          setQuery={setQuery}
          area={area}
          setArea={setArea}
          areas={areas}
          onClear={() => { setQuery(""); setArea(""); }}
        />
        <section className="grid">
          {filtered.map(c => (
            <CompanyCard
              key={c.id}
              name={c.name}
              logo={c.logo}
              shortDescription={c.shortDescription}
              practiceAreas={c.practiceAreas}
              actionLabel="Postularme"
              onAction={() => alert(`Postulación enviada a ${c.name} ✨`)}
            />
          ))}
          {filtered.length === 0 && <p>No hay resultados para los filtros aplicados.</p>}
        </section>
      </main>
      <footer className="footer">
        <p>Contacto: practicas@orion.edu • (+57) 300 000 0000</p>
      </footer>
    </div>
  );
}
