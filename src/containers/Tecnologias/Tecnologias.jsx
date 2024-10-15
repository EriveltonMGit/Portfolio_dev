// IMPORT IMG
import ImgBoll from "../../assets/image/img_perfil_sobre/texto_boll.png";
// IMPORTS CSS
import style from "../Tecnologias/tec.module.css";
// IMPORT ICONS REACT
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiStyledcomponents } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { BiLogoFigma } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { IoLogoSass } from "react-icons/io5";
import { SiGooglecloud } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { SiCanva } from "react-icons/si";

function Tecnologias() {
  return (
    <section
      className={style.section}
      id="tecnologias"
      // data-aos="fade-up"
      // data-aos-duration="3000"
    >
      {/* AQUI FICA O TITULO  */}
      <div className={style.h1}>Habilidades</div>

      {/* DIV CONTAINER DOS CARDS */}
      <div className={style.container}>
        {/* CARD 1 */}
        <div
          className={style.card_1}
          // data-aos="fade-right"
          // data-aos-duration="3000"
        >
          {/* AQUI FICA OS CARDS DAS TECNOLOGIAS */}
          <div className={style.content}>
            <div className={style.cards} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
              <p className={style.p}>
                REACT <FaReact className={style.i} />
              </p>
            </div>

            <div className={style.cards} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
              <p className={style.p}>
                ANGULAR <FaAngular className={style.i} />
              </p>
            </div>
            <div className={style.cards} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
              <p className={style.p}>
                HTML <FaHtml5 className={style.i} />
              </p>
            </div>
            <div className={style.cards} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
              <p className={style.p}>
                CSS <DiCss3 className={style.i} />
              </p>
            </div>
            <div className={style.cards} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
              <p className={style.p}>
                SASS
                <IoLogoSass className={style.i} />
              </p>
            </div>
            <div className={style.cards} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
              <p className={style.p}>
                JAVASCRIPT <IoLogoJavascript className={style.i} />
              </p>
            </div>
            <div className={style.cards} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
              <p className={style.p}>
                STYLED COMPONENTS <SiStyledcomponents className={style.i} />
              </p>
            </div>
            <div className={style.cards} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
              <p className={style.p}>
                TAILWINDCSS
                <RiTailwindCssLine className={style.i} />
              </p>
            </div>
            <div className={style.cards} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
              <p className={style.p}>
                GITHUB
                <FaGithub className={style.i} />
              </p>
            </div>
            <div className={style.cards} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
              <p className={style.p}>
                FIGMA <BiLogoFigma className={style.i} />
              </p>
            </div>
            <div className={style.cards} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
              <p className={style.p}>
                GOOGLE CLOUD <SiGooglecloud className={style.i} />
              </p>
            </div>
            <div className={style.cards} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
              <p className={style.p}>
                TYPESCRIPT <TbBrandTypescript className={style.i} />
              </p>
            </div>
            <div className={style.cards} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
              <p className={style.p}>
                BOOTSTRAP <FaBootstrap className={style.i} />
              </p>
            </div>
            <div className={style.cards} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
              <p className={style.p}>
                POSTGRE SQL <SiPostgresql className={style.i} />
              </p>
            </div>
            <div className={style.cards} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
              <p className={style.p}>
                CANVA <SiCanva className={style.i} />
              </p>
            </div>
          </div>
        </div>
        {/* CARD 2 */}
        <div
          className={style.card_2}
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <h3>Sobre minhas Habilidades</h3>
          <p>
            Neste painel, apresento as principais tecnologias e ferramentas que
            utilizo em meus projetos. Minha formação abrange desde linguagens e
            bibliotecas front-end, como React e Angular, até frameworks de
            design responsivo, como Bootstrap e Tailwind CSS, que me ajudam a
            criar interfaces modernas e dinâmicas.
          </p>
          <p>
            Além disso, conto com habilidades em HTML e CSS, que formam a base
            para o desenvolvimento web, complementadas pelo uso de Sass e Styled
            Components, proporcionando uma estilização avançada e
            componentizada. <br />
            Estou sempre em busca de novas ferramentas e tendências para
            aprimorar meu trabalho, com um foco contínuo em React e Angular, que
            me permitem desenvolver interfaces de usuário reativas e robustas.
          </p>
        </div>
      </div>
      <div className={style.ImgBoll}>
        <img src={ImgBoll} alt="imagem com nome do desenvolvedor" />
      </div>
    </section>
  );
}

export default Tecnologias;
