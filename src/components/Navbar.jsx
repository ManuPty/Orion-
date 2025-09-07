import { Link, useNavigate } from "react-router-dom";

/**
 * Navbar simple
 * Props:
 * - studentName (string)
 * - onLogout (function) opcional
 * - logo (string) ruta pública (por defecto /img/bienvenida.jpg)
 */
export default function Navbar({ studentName = "Estudiante", onLogout, logo = "/img/bienvenida.jpg" }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (typeof onLogout === "function") onLogout();
    navigate("/login");
  };

  return (
    <header className="nav">
      <div className="nav__left">
        <img src={logo} alt="Logo" className="nav__logo" />
        <Link to="/" className="nav__brand">Orion</Link>
      </div>
      <div className="nav__right">
        <span className="nav__user" aria-label="Nombre del estudiante">{studentName}</span>
        <button className="btn btn--secondary" onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </header>
  );
}
