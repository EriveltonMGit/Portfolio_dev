import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "./containers/Inicio/anime.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css"; // Importa o CSS do AOS
// IMPORT COMPONETS SECTIONS
import Nav from "./containers/Home/Nav.jsx";
import Inicio from "./containers/Inicio/Inicio.jsx";
import Sobre from "./containers/Sobre/Sobre.jsx";
import Tecnologias from "./containers/Tecnologias/Tecnologias.jsx";
import Projetos from "./containers/Projetos/Projetos.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Nav />
    <Inicio />
    <Sobre />
    <Tecnologias />
    <Projetos />
  </StrictMode>
);
// Inicializa o AOS
import AOS from "aos";
AOS.init();
