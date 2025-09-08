import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/css/styles.css";

const DashboardEstudiante = () => {
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
          <span className="notif">
            <i className="fa-solid fa-bell"></i>
            <sup>1</sup>
          </span>
          <button
            className="btn"
            onClick={() => (window.location.href = "/")}
          >
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

            <div className="progress">
              <div className="progress__bar" style={{ "--value": "70%" }}></div>
              <span className="progress__label">70%</span>
            </div>
          </article>

          <article className="card card--xl">
            <div className="card__header">
              <h3>Próximos Entregables</h3>
            </div>
            <div className="panel">
              <p>
                <i className="fa-solid fa-file-circle-check"></i> Reporte
                semanal – <b>viernes</b>
              </p>
              <p>
                <i className="fa-solid fa-pen-ruler"></i> Actividad N°4 –{" "}
                <b>25/09</b>
              </p>
            </div>
          </article>
        </section>

        {/* Columna derecha */}
        <section className="quick">
          <h2>Accesos Rápidos</h2>
          <div className="quick__grid">
            <button className="quick__btn">
              <i className="fa-solid fa-cloud-arrow-up"></i> Subir Reporte
            </button>
            <button className="quick__btn">
              <i className="fa-solid fa-comment-dots"></i> Feedback
            </button>
            <button className="quick__btn">
              <i className="fa-solid fa-calendar-days"></i> Calendario
            </button>
            <button className="quick__btn">
              <i className="fa-solid fa-list-check"></i> Actividades
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardEstudiante;
