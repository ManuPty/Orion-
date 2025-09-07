import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import DashboardEstudiante from "./pages/DashboardEstudiante.jsx";
import DashboardTutorAcademico from "./pages/DashboardTutorAcademico.jsx";
import DashboardTutorEmpresarial from "./pages/DashboardTutorEmpresarial.jsx";
import StudentIntershipOffers from "./pages/StudentIntershipOffers.jsx";


import "./assets/css/styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard-estudiante" element={<DashboardEstudiante />} />
        <Route path="/dashboard-tutor-academico" element={<DashboardTutorAcademico />} />
        <Route path="/dashboard-tutor-empresarial" element={<DashboardTutorEmpresarial />} />
        <Route path="/ofertas-practica" element={<StudentIntershipOffers />} />
      </Routes>
    </BrowserRouter>
  );
}
