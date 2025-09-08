import React from "react";
import "../assets/css/styles.css"; 

const DashboardTutorAcademico = () => {
  return (
    <div className="dashboard">
      {/* Topbar */}
      <header className="topbar">
        <h1>
          <i className="fa-solid fa-graduation-cap"></i> Tutor Académico
        </h1>
        <div className="topbar__right">
          <span>
            <i className="fa-solid fa-user"></i> Bienvenido, John Doe
          </span>
          <span className="notif">
            <i className="fa-solid fa-bell"></i>
            <sup>1</sup>
          </span>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="grid">
        {/* Tarjetas */}
        <section className="cards">
          <article className="card">
            <i className="fa-solid fa-user-graduate"></i>
            <div>
              <h3>Estudiantes</h3>
              <p>
                Total: <b>10</b>
              </p>
            </div>
          </article>

          <article className="card">
            <i className="fa-solid fa-building"></i>
            <div>
              <h3>Empresas</h3>
              <p>
                Total: <b>7</b>
              </p>
            </div>
          </article>

          <article className="card">
            <i className="fa-solid fa-calendar-check"></i>
            <div>
              <h3>Próximos Entregables</h3>
              <p>Revisa tu calendario</p>
            </div>
          </article>
        </section>

        {/* Accesos rápidos */}
        <section className="quick">
          <h2>Accesos Rápidos</h2>
          <div className="quick__grid">
            <button className="quick__btn">
              <i className="fa-solid fa-download"></i> Bajar Reporte
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
            <button className="quick__btn">
              <i className="fa-solid fa-user-plus"></i> Registrar Usuario
            </button>
            <button className="quick__btn">
              <i className="fa-solid fa-check-circle"></i> Calificar
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardTutorAcademico;
