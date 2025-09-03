// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const USERS = {
  docente25: { pass: "123", role: "tutor-academico", name: "John Doe" },
  empresa25: { pass: "456", role: "tutor-empresarial", name: "John Doe" },
  estudiante25: { pass: "789", role: "estudiante", name: "John Doe" },
};

const ROUTES = {
  "tutor-academico": "/dashboard-tutor-academico",
  "tutor-empresarial": "/dashboard-tutor-empresarial",
  estudiante: "/dashboard-estudiante",
};

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const record = USERS[username.trim()];
    if (!record || record.pass !== password) {
      setError(true);
      return;
    }

    // Guardar sesión en localStorage
    const session = {
      user: username,
      name: record.name,
      role: record.role,
      ts: Date.now(),
    };
    localStorage.setItem("session", JSON.stringify(session));

    // Redirigir según el rol
    navigate(ROUTES[record.role]);
  };

  return (
    <div className="login-page">
      <div className="split">
        <div className="split__left bg-login"></div>

        <div className="split__right">
          <h2>Iniciar Sesión</h2>

          <form className="form" autoComplete="off" onSubmit={handleSubmit}>
            <label htmlFor="username" className="label">
              USERNAME
            </label>
            <label className="input">
              <i className="fa-solid fa-user"></i>
              <input
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>

            <label htmlFor="password" className="label">
              PASSWORD
            </label>
            <label className="input">
              <i className="fa-solid fa-lock"></i>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>

            {error && (
              <div className="alert alert--error" role="alert">
                Usuario o contraseña incorrectos.
              </div>
            )}

            <a href="#" className="forgot">
              Olvidé mi contraseña
            </a>

            <button className="btn" type="submit">
              <i className="fa-solid fa-arrow-right-to-bracket"></i> Entrar
            </button>
          </form>

          <p className="quote">“La forma inteligente de gestionar tus prácticas”</p>
        </div>
      </div>
    </div>
  );
}
