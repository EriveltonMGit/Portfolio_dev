// import React, { useState } from "react";
// IMPORT MODULES
import TypingEffect from "../../components/TypingEffect";
// ANIMAÇÃO 
// IMPORT CSS
import styles from '../Inicio/Ini.module.css'; 

// IMPORT ICONS REACT 
import { IoIosArrowDown } from "react-icons/io";

// IMPORT IMAGENS
import ImgRotate from "../../containers/Inicio/react.svg";
import { style } from "framer-motion/client";
import FrameImg from "../../assets/frame/boll_animation.gif"


function Inicio() {
  return (
    <section className={styles.inicio} id="inicio"
     data-aos="zoom-out-down" data-aos-duration="1000"
     >
     
      {/* CARD 1 */}
      <main className={styles.card}>
        <span className={styles.span}></span>

        {/* AQUI FICA O TEXTO COM O NOME DO DESENVOLVEDOR */}
        <div className={style.titulo}>
          <div className={styles.p}>
            
            <p> REACT DEVELOPMENT <img src={ImgRotate} alt="" /> </p>
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
      <div className={styles.icons_social} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="3000">
     
          <a href="https://api.whatsapp.com/send?phone=5561981579569&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho!">
            <i className="bi bi-whatsapp"></i>
          </a>
          <a href="https://www.linkedin.com/in/erivelton-magalh%C3%A3es-553a6b215/">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/EriveltonMGit/EriveltonMGit">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://web-desing-page.netlify.app/">
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
