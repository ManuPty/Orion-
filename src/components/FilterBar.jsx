import { useMemo } from "react";

/**
 * FilterBar
 * Props:
 * - query (string), setQuery (fn)
 * - area (string), setArea (fn)
 * - areas (string[])
 * - onClear (fn)
 */
export default function FilterBar({ query, setQuery, area, setArea, areas = [], onClear }) {
  const uniqueAreas = useMemo(() => Array.from(new Set(areas)), [areas]);

  return (
    <div className="filters">
      <input
        className="input"
        type="text"
        placeholder="Buscar por empresa o palabra clave..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select className="input" value={area} onChange={(e) => setArea(e.target.value)}>
        <option value="">Todas las áreas</option>
        {uniqueAreas.map((a) => (
          <option key={a} value={a}>{a}</option>
        ))}
      </select>
      <button className="btn btn--ghost" onClick={onClear}>Limpiar</button>
    </div>
  );
}
