import { Link } from "react-router-dom";
import "../assets/css/styles.css"; // importa tu CSS global

export default function Home() {
  return (
    <div className="welcome-page">
      <div className="split">
        <div className="split__left bg-welcome"></div>
        <div className="split__right">
          <h1>¡Bienvenido!</h1>
          <p>Tu camino hacia la experiencia comienza aquí.</p>
          <Link className="btn" to="/login">
            <i className="fa-solid fa-right-to-bracket"></i> Iniciar Sesión
          </Link>
        </div>
      </div>
    </div>
  );
}
