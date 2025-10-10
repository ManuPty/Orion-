import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ROUTES = {
  "tutor-academico": "/dashboard-tutor-academico",
  "tutor-empresarial": "/dashboard-tutor-empresarial",
  estudiante: "/dashboard-estudiante",
};

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      const base = import.meta.env.VITE_API_URL || "";
      const res = await fetch(base + "/api/token/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ detail: "Login failed" }));
        setError(err.detail || "Credenciales inválidas");
        return;
      }

      const data = await res.json();
      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("refreshToken", data.refresh);

      // Obtener datos del usuario
      const meRes = await fetch(base + "/api/me/", {
        headers: { Authorization: "Bearer " + data.access },
      });
      const profile = await meRes.json();

      localStorage.setItem("userRole", profile.role);
      localStorage.setItem(
        "studentName",
        profile.get_full_name || profile.username || profile.first_name || ""
      );

      const route = ROUTES[profile.role] || "/";
      navigate(route);
    } catch (err) {
      console.error(err);
      setError("Error de conexión con el servidor");
    }
  }

  return (
    <div className="login-page">
      <div className="split">
        {/* Panel izquierdo con imagen o color */}
        <div className="split__left bg-login"></div>

        {/* Panel derecho con formulario */}
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
                {error}
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
