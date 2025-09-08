import React from "react";
import "../assets/css/styles.css";

const DashboardTutorEmpresarial = () => {
  return (
    <div className="dashboard">
      {/* Topbar */}
      <header className="topbar">
        <h1>
          <i className="fa-solid fa-briefcase"></i> Tutor Empresarial
        </h1>
        <div className="topbar__right">
          <span>
            <i className="fa-solid fa-user-tie"></i> Bienvenido, John Doe
          </span>
          <span className="notif">
            <i className="fa-solid fa-bell"></i>
            <sup>1</sup>
          </span>
          <button className="btn" onClick={() => (window.location.href = "/")}>
            <i className="fa-solid fa-arrow-right-from-bracket"></i> Salir
          </button>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="grid">
        {/* Columna izquierda: tarjetas resumen */}
        <section className="cards">
          <article className="card card--xl">
            <div className="card__header">
              <h3>Estudiantes</h3>
              <span className="chip">Total: 3</span>
            </div>
            <div className="list">
              <div className="list__item">
                <i className="fa-solid fa-user-graduate"></i> Ana López · Ing. Sistemas
              </div>
              <div className="list__item">
                <i className="fa-solid fa-user-graduate"></i> Diego Ruiz · Marketing
              </div>
              <div className="list__item">
                <i className="fa-solid fa-user-graduate"></i> Camila Gil · Diseño
              </div>
            </div>
          </article>

          <article className="card card--xl">
            <div className="card__header">
              <h3>Próximos Entregables</h3>
            </div>
            <div className="panel">
              <p>
                <i className="fa-solid fa-file-lines"></i> Informe de avance – <b>12/09</b>
              </p>
              <p>
                <i className="fa-solid fa-clipboard-check"></i> Evaluación intermedia – <b>20/09</b>
              </p>
            </div>
          </article>
        </section>

        {/* Columna derecha: accesos rápidos */}
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

export default DashboardTutorEmpresarial;
