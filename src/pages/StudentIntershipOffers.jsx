import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import CompanyCard from "../components/CompanyCard.jsx";
import FilterBar from "../components/FilterBar.jsx";

export default function StudentIntershipOffers() {
  const [studentName] = useState(() => localStorage.getItem("studentName") || "Estudiante");
  const [query, setQuery] = useState("");
  const [area, setArea] = useState("");
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Cargar empresas desde el backend
  useEffect(() => {
    async function fetchCompanies() {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/companies/`);
        if (!res.ok) throw new Error("Error al cargar las empresas");
        const data = await res.json();
        setCompanies(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCompanies();
  }, []);

  // Obtener todas las áreas únicas
  const areas = useMemo(() => {
    const allAreas = companies.flatMap(c => c.practice_areas || []);
    return [...new Set(allAreas)];
  }, [companies]);

  // Filtro de búsqueda
  const filtered = useMemo(() => {
    return companies.filter(c => {
      const q = query.trim().toLowerCase();
      const matchQuery =
        q === "" ||
        (c.name && c.name.toLowerCase().includes(q)) ||
        (c.description && c.description.toLowerCase().includes(q));
      const matchArea = area === "" || (c.practice_areas || []).includes(area);
      return matchQuery && matchArea;
    });
  }, [companies, query, area]);

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
          onClear={() => {
            setQuery("");
            setArea("");
          }}
        />

        {loading ? (
          <p>Cargando empresas...</p>
        ) : (
          <section className="grid">
            {filtered.map(c => (
              <CompanyCard
                key={c.id}
                name={c.name}
                logo={c.logo || "/img/company-placeholder.png"}
                shortDescription={c.description || "Sin descripción disponible."}
                practiceAreas={c.practice_areas || []}
                actionLabel="Postularme"
                onAction={() =>
                  alert(`Postulación enviada a ${c.name} ✨`)
                }
              />
            ))}
            {filtered.length === 0 && (
              <p>No hay resultados para los filtros aplicados.</p>
            )}
          </section>
        )}
      </main>

      <footer className="footer">
        <p>Contacto: practicas@orion.edu • (+57) 300 000 0000</p>
      </footer>
    </div>
  );
}
