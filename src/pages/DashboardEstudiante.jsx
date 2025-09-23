import React from "react";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/css/styles.css"; // ajusta la ruta si es necesario

const DashboardEstudiante = () => {
  const navigate = useNavigate();

  // Handlers de navegación
  const goHome = () => navigate("/");
  const goOffers = () => navigate("/ofertas-practica");
  const goUploadReport = () => navigate("/upload-report");
  const goFeedback = () => navigate("/feedback");
  const goCalendar = () => navigate("/calendar");
  const goActivities = () => navigate("/activities");

  // ejemplo: podrías calcular el porcentaje dinámicamente
  const practicaProgress = "70%";

  return (
    <div className="dashboard">
      {/* Topbar */}
      <header className="topbar">
        <h1>
          <i className="fa-solid fa-user-graduate"></i> Estudiante
        </h1>
        <div className="topbar__right">
          <span>
            <i className="fa-solid fa-user"></i> Bienvenido, John Doe
          </span>
          <span className="notif" aria-label="notificaciones">
            <i className="fa-solid fa-bell" aria-hidden="true"></i>
            <sup>1</sup>
          </span>
          <button className="btn" onClick={goHome} aria-label="Salir">
            <i className="fa-solid fa-arrow-right-from-bracket"></i> Salir
          </button>
        </div>
      </header>

      <main className="grid">
        {/* Columna izquierda */}
        <section className="cards">
          <article className="card card--xl">
            <h3>Mi Práctica</h3>
            <p className="muted">Empresa XYZ</p>
            <p className="muted">Tutor: Juan Pérez</p>

            <div className="progress" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>
              {/* En React, para usar variables CSS custom safely: */}
              <div
                className="progress__bar"
                style={{ "--value": practicaProgress }}
              />
              <span className="progress__label">{practicaProgress}</span>
            </div>

            <button className="btn" onClick={goOffers}>
              Ver Ofertas de Prácticas
            </button>
          </article>

          <article className="card card--xl">
            <div className="card__header">
              <h3>Próximos Entregables</h3>
            </div>
            <div className="panel">
              <p>
                <i className="fa-solid fa-file-circle-check"></i> Reporte semanal – <b>viernes</b>
              </p>
              <p>
                <i className="fa-solid fa-pen-ruler"></i> Actividad N°4 – <b>25/09</b>
              </p>
            </div>
          </article>
        </section>

        {/* Columna derecha */}
        <section className="quick">
          <h2>Accesos Rápidos</h2>
          <div className="quick__grid">
            <button className="quick__btn" onClick={goUploadReport}>
              <i className="fa-solid fa-cloud-arrow-up"></i> Subir Reporte
            </button>
            <button className="quick__btn" onClick={goFeedback}>
              <i className="fa-solid fa-comment-dots"></i> Feedback
            </button>
            <button className="quick__btn" onClick={goCalendar}>
              <i className="fa-solid fa-calendar-days"></i> Calendario
            </button>
            <button className="quick__btn" onClick={goActivities}>
              <i className="fa-solid fa-list-check"></i> Actividades
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardEstudiante;
