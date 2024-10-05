import React from 'react';

// IMPORT COMPONENTS
import Wrapper from "../../components/Wrapper.style"; //component principal nav bar
import SpanBorder from "../../components/SpanBorder.style"; //borda do menu - span border
import NavBar from "../../components/Nav.style"
// import ButtonLeft from "../../components/ButtonLeft.style"

// IMPORT CSS
import style from "../Home/nav.module.css";
// IMPORTS IMG
import Logo from "../Home/logo.png";

function Nav() {
  const handleSmoothScroll = (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link

    const targetId = event.currentTarget.getAttribute('href'); // Obtém o ID do alvo
    const targetSection = document.querySelector(targetId); // Seleciona a seção alvo

    // Rola suavemente para a seção alvo
    targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Ajusta a posição da seção para o topo
    });
};





  return (
    // NAV BAR - MENU
    <Wrapper>
      {/* Aqui fica a border bottom menu */}
      <SpanBorder></SpanBorder>

      <div  className={style.logo}>
        <a href="https://web-desing-page.netlify.app/"><img src={Logo} className={style.logo_img } alt="" /></a> 
      </div>

     <NavBar >
     <li><a href="#inicio" onClick={handleSmoothScroll}><i className="bi bi-house" ></i>Início</a></li>
                <li><a href="#sobre" onClick={handleSmoothScroll}><i className="bi bi-file-earmark-person-fill"></i>Sobre</a></li>
                <li><a href="#tecnologias" onClick={handleSmoothScroll}><i className="bi bi-card-checklist"></i>Tecnologias</a></li>
                <li><a href="#projetos" onClick={handleSmoothScroll}><i className="bi bi-star text"></i>Projetos</a></li>
                <li><a href="#site" onClick={handleSmoothScroll}><i className="bi bi-substack"></i>Site</a></li>
                <li><a href="#curriculo" onClick={handleSmoothScroll}><i className="bi bi-file-earmark-person-fill"></i>Currículo</a></li>
                <li><a href="#contato" onClick={handleSmoothScroll}><i className="bi bi-person-lines-fill"></i>Contato</a></li>
     </NavBar>

      {/* AQUI FICA O ION DA LUA E SOL */}
    <button className={style.lua}><i className="bi bi-moon-stars-fill"></i></button>
    <button className={style.sol}><i className="bi bi-brightness-high-fill"></i></button>


      
    </Wrapper>
  );
}

export default Nav;
