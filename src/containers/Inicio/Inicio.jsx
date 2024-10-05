import React, { useState } from "react";
// IMPORT MODULES
import WrapperPrincipal from "../../components/WrapperPrincipal";
import Card from "../../components/Card.style";
import Titulo from "../../components/Titulo.style";
import AreaCard from "../../components/AreaCard1.style";
import MiniCard from "../../components/MiniCards.style";
import ButtonLeft from "../../components/ButtonLeft.style";
import TypingEffect from "../../components/TypingEffect";
// ANIMAÇÃO 


// IMPORT CSS
// import style from "../inicio/Ini.module.css";
import styles from '../inicio/Ini.module.css'; 

// IMPORT ICONS REACT 
import { IoIosArrowDown } from "react-icons/io";

// IMPORT IMAGENS
import ImgRotate from "../../containers/Inicio/react.svg";
import FrameImg from "../../assets/frame/boll_animation.gif"

function Inicio() {
  return (
    <WrapperPrincipal id="inicio" data-aos="zoom-out-up" data-aos-duration="2000">
     
      {/* CARD 1 */}
      <Card>
        <span></span>

        {/* AQUI FICA O TEXTO COM O NOME DO DESENVOLVEDOR */}
        <Titulo>
          <div className={styles.p}>
            <p>
              React <img src={ImgRotate} alt="" />
            </p>
            <p> SEJA BEM-VINDO  </p>
          </div>
          {/* AQUI FICA A MENSAGEM ANIDAMADA */}
          <h1 className={styles.h1 } >
            <TypingEffect  />
          </h1>
          <ButtonLeft>
            Compartilhar <i className="bi bi-arrow-right "></i>
          </ButtonLeft>
          <button className={styles.btn_cv}>
            Download CV<i className="bi bi-file-earmark-text"></i>
          </button>
        </Titulo>
        {/* AQUI FICA OS BOTOES E CARDS DA SECTION1 CARD 1 INICIO */}
        <AreaCard>
          {/* card-1 */}
          <MiniCard className={styles.mini_cards} data-aos="fade-up" data-aos-duration="2000">
            <i className="bi bi-tv"></i>
            <b>Interface</b>
            <p>
              Experiência em criar interfaces interativas e dinâmicas utilizando
              React e Angular
            </p>
          </MiniCard>
          {/* card-2 */}
          <MiniCard className={styles.mini_cards} data-aos="fade-up" data-aos-duration="2000">
            <i className="bi bi-file-break-fill"></i>
            <b>Landing Pages</b>
            <p>
              Páginas personalizadas, com design atraente e otimizado para
              conversões.
            </p>
          </MiniCard>
          {/* card-3 */}
          <MiniCard className={styles.mini_cards} data-aos="fade-up" data-aos-duration="2000">
            <i className="bi bi-layout-text-window-reverse" ></i>
            <b>UX/UI</b>
            <p>
              Interfaces intuitivas e funcionais com foco na experiência do
              usuário.
            </p>
          </MiniCard>
          {/* card-4 */}
          <MiniCard className={styles.mini_cards} data-aos="fade-up" data-aos-duration="2000">
            <i className="bi bi-layout-text-window-reverse"></i>
            <b>UX/UI</b>
            <p>
              Interfaces intuitivas e funcionais com foco na experiência do
              usuário.
            </p>
          </MiniCard>
        </AreaCard>
      </Card>
      {/* AQUI FICA OS ICONS DO CARD PRINCIPAL 1 */}
      <div className={styles.icons_social}>
     
          <a href="">
            <i className="bi bi-whatsapp"></i>
          </a>
          <a href="">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="">
            <i className="bi bi-github"></i>
          </a>
          <a href="">
            <i className="bi bi-code-square"></i>
          </a>
        
      </div>

      {/* CARD 2 */}
      <Card>
       

         <img src={FrameImg} className={styles.img}alt="" />


        
      </Card>
      <a href="#sobre"  className={styles.arrow} >
      <IoIosArrowDown/>  
      </a>
      
    </WrapperPrincipal>
  );
}
export default Inicio;
