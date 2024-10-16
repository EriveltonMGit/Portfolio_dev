import { useState, useEffect } from "react";

// IMPORT COMPONENTS
import Wrapper from "../../components/Wrapper.style";
import SpanBorder from "../../components/SpanBorder.style";
import NavBar from "../../components/Nav.style";

// IMPORT CSS
import style from "../Home/nav.module.css";

// IMPORTS IMG
import Logo from "../Home/logo.png";
import ImgRotate from "../../containers/Inicio/react.svg";

function Nav() {
  // Estado para controlar se o menu está aberto ou fechado
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSmoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Função para abrir ou fechar o menu
  function toggleMenu() {
    setMenuOpen(!menuOpen); // Alterna entre true e false
  }

  function chatSite() {
    const msg = confirm("Deseja abrir o site do desenvolvedor?");
    if (msg) {
      location.href = "https://web-desing-page.netlify.app/";
    } else {
      return;
    }
  }

  // useEffect para fechar o menu ao clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      const menuElement = document.getElementById("menu");
      if (menuOpen && menuElement && !menuElement.contains(event.target)) {
        setMenuOpen(false); // Fecha o menu se o clique for fora
      }
    }

    // Adiciona o listener para o clique fora
    document.addEventListener("mousedown", handleClickOutside);
    
    // Remove o listener quando o componente for desmontado
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <Wrapper className={style.nav}>
      <SpanBorder />
      <div className={style.logo}>
        <a href="https://web-desing-page.netlify.app/">
          <img src={Logo} className={style.logo_img} alt="" />
        </a>
      </div>

      <NavBar>
        <li>
          <a href="#inicio" onClick={handleSmoothScroll}>
            <i className="bi bi-house"></i>Início
          </a>
        </li>
        <li>
          <a href="#sobre" onClick={handleSmoothScroll}>
            <i className="bi bi-file-earmark-person-fill"></i>Sobre
          </a>
        </li>
        <li>
          <a href="#tecnologias" onClick={handleSmoothScroll}>
            <i className="bi bi-card-checklist"></i>Tecnologias
          </a>
        </li>
        <li>
          <a href="#projetos" onClick={handleSmoothScroll}>
            <i className="bi bi-star text"></i>Projetos
          </a>
        </li>
        <li>
          <a href="#" onClick={chatSite}>
            <i className="bi bi-substack"></i>Site
          </a>
        </li>
        <li>
          <a href="#servicos" onClick={handleSmoothScroll}>
            <i className="bi bi-ui-radios-grid"></i>Serviços
          </a>
        </li>
        <li>
          <a href="#contato" onClick={handleSmoothScroll}>
            <i className="bi bi-person-lines-fill"></i>Contato
          </a>
        </li>
      </NavBar>

      {/* BUTTON DEVICE */}
      <button className={style.btn_device} onClick={toggleMenu}>
        <i className="bi bi-list"></i>
      </button>

      {/* AQUI FICA O ÍCONE DA LUA E SOL */}
      <button className={style.lua}>
        <i className="bi bi-moon-stars-fill"></i>
      </button>
      <button className={style.sol}>
        <i className="bi bi-brightness-high-fill"></i>
      </button>

      {/* MENU DEVICE */}
      <div
        id="menu"
        className={`${style.menu_device} ${menuOpen ? style.menu_open : ""}`}
      >
        <div className={style.text_menu_device}>
          <i className="bi bi-grid-1x2-fill"></i>
          <h5>PORTFÓLIO </h5><img src={ImgRotate} alt="" />
        </div>
        <div className={style.device_ul}>
          <li>
            <a href="#inicio" onClick={handleSmoothScroll}>
              <i className="bi bi-house"></i>Início
            </a>
          </li>
          <li>
            <a href="#sobre" onClick={handleSmoothScroll}>
              <i className="bi bi-file-person"></i>Sobre
            </a>
          </li>
          <li>
            <a href="#tecnologias" onClick={handleSmoothScroll}>
              <i className="bi bi-card-checklist"></i>Tecnologias
            </a>
          </li>
          <li>
            <a href="#projetos" onClick={handleSmoothScroll}>
              <i className="bi bi-star text"></i>Projetos
            </a>
          </li>
          <li>
            <a href="#" onClick={chatSite}>
              <i className="bi bi-substack"></i>Site
            </a>
          </li>
          <li>
            <a href="#servicos" onClick={handleSmoothScroll}>
              <i className="bi bi-ui-radios-grid"></i>Serviços
            </a>
          </li>
          <li>
            <a href="#contato" onClick={handleSmoothScroll}>
              <i className="bi bi-chat-square-text"></i>Contato
            </a>
          </li>
        </div>
      </div>
    </Wrapper>
  );
}

export default Nav;
