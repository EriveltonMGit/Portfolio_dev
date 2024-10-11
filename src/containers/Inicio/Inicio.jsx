// import React, { useState } from "react";
// IMPORT MODULES
// import WrapperPrincipal from "../../components/WrapperPrincipal";
// import Card from "../../components/Card.style";
// import Titulo from "../../components/Titulo.style";
// import AreaCard from "../../components/AreaCard1.style";
// import MiniCard from "../../components/MiniCards.style";
// import ButtonLeft from "../../components/ButtonLeft.style";
import TypingEffect from "../../components/TypingEffect";
// ANIMAÇÃO 


// IMPORT CSS
// import style from "../inicio/Ini.module.css";
import styles from '../Inicio/Ini.module.css'; 

// IMPORT ICONS REACT 
import { IoIosArrowDown } from "react-icons/io";

// IMPORT IMAGENS
import ImgRotate from "../../containers/Inicio/react.svg";
import { style } from "framer-motion/client";
import FrameImg from "../../assets/frame/boll_animation.gif"


function Inicio() {
  return (
    <section className={styles.inicio} id="inicio">
     
      {/* CARD 1 */}
      <main className={styles.card}>
        <span className={styles.span}></span>

        {/* AQUI FICA O TEXTO COM O NOME DO DESENVOLVEDOR */}
        <div className={style.titulo}>
          <div className={styles.p}>
            <p>
              REACT <img src={ImgRotate} alt="" />
            </p>
            <p> SEJA BEM-VINDO  </p>
          </div>


          {/* AQUI FICA A MENSAGEM ANIDAMADA */}
          <h1 className={styles.h1} >
            <TypingEffect  />
          </h1>
          <button className={styles.btn_compartilhar}>
            Compartilhar <i className="bi bi-arrow-right "></i>
          </button>
          <button className={styles.btn_cv}>
            Download CV<i className="bi bi-file-earmark-text"></i>
          </button>
        </div>


        {/* AQUI FICA OS BOTOES E CARDS DA SECTION1 CARD 1 INICIO */}
        <div className={styles.div_mini_cards}>
          {/* card-1 */}
          <div className={styles.mini_cards} data-aos="fade-up" data-aos-duration="2000">
            <i className="bi bi-tv"></i>
            <b>Interface</b>
            <p>
              Experiência em criar interfaces interativas e dinâmicas utilizando
              React e Angular
            </p>
          </div>
          {/* card-2 */}
          <div className={styles.mini_cards} data-aos="fade-up" data-aos-duration="2000">
            <i className="bi bi-file-break-fill"></i>
            <b>Landing Pages</b>
            <p>
              Páginas personalizadas, com design atraente e otimizado para
              conversões.
            </p>
          </div>
          {/* card-3 */}
          <div className={styles.mini_cards} data-aos="fade-up" data-aos-duration="2000">
            <i className="bi bi-layout-text-window-reverse" ></i>
            <b>UX/UI</b>
            <p>
              Interfaces intuitivas e funcionais com foco na experiência do
              usuário.
            </p>
          </div>
          {/* card-4 */}
          <div className={styles.mini_cards} data-aos="fade-up" data-aos-duration="2000">
            <i className="bi bi-code-slash"></i>
            <b>Desenvolvimento</b>
            <p>
            Criação de sites e aplicações web responsivas e escaláveis.
            </p>
          </div>
        </div>

      </main>



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
      <main className={styles.card_2}>
       

         <img src={FrameImg} className={styles.img}alt="" />
              {/* <video src={video}  className={styles.video} autoPlay muted></video> */}

        
      </main>
      <a href="#sobre"  className={styles.arrow} >
      <IoIosArrowDown/>  
      </a>
      
    </section>
  );
}
export default Inicio;
