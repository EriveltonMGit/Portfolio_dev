import  { useState } from "react";

import WrapperProjetos from "../../components/WrapperProjetos";
import Button from "../../components/Button.style";
import Modal from "../../components/Modal.style";
// IMPORT CSS
import style from "../Projetos/pro.module.css";
// IMPORT IMG LOCK CADEADO
import Lock from "../../assets/image/img_projetos/lock.gif";
import BkPerfil from "../../assets/image/img_perfil_sobre/Elipse-1.webp";
import { IoIosArrowBack } from "react-icons/io";
// IMG CARDS PROJETOS
import ImgCrd1 from "../../assets/image/img_projetos/img_1.png";
import ImgCrd2 from "../../assets/image/img_projetos/img_2.png";
import ImgCrd3 from "../../assets/image/img_projetos/img_3.png";
import ImgCrd4 from "../../assets/image/img_projetos/img_4.png";
import ImgCrd5 from "../../assets/image/img_projetos/img_5.png";
import ImgCrd6 from "../../assets/image/img_projetos/img_6.png";

function Projetos() {
  // Estado para controlar a visibilidade da div
  const [isVisible, setIsVisible] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null); // Armazena o card selecionado

  // Função para alternar a visibilidade
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev); // Alterna a visibilidade
  };

  // Função para abrir o modal com o conteúdo do card selecionado
  const abrirCard = (cardData) => {
    setSelectedCard(cardData); // Define qual card foi clicado
  };

  // Função para fechar o modal
  const fecharModal = () => {
    setSelectedCard(null); // Fecha o modal
  };

  return (
    <WrapperProjetos id="projetos">
      {/* AQUI FICA OS CARDS QUE SE FECHAM */}
      <div
        className={`${style.cad_animation_left} ${
          !isVisible ? style.show : ""
        }`}
      ></div>
      <div
        className={`${style.cad_animation_rigth} ${
          !isVisible ? style.show : ""
        }`}
      ></div>

      {/* BUTTON PARA FECHAR OS CARDS */}
      <button
        onClick={toggleVisibility}
        className={`${style.button} ${!isVisible ? style.show : ""}`}
      >
        <img src={Lock} alt="" />
      </button>

      {/* BUTTON PARA DEIXAR OS CARDS ABERTOS */}
      <button onClick={toggleVisibility} className={style.btn_abrir}>
        <IoIosArrowBack />
      </button>

      {/* AQUI FICAM OS CARDS DO PROJETO */}
      <div className={style.main}>
        <h1 className={style.titulo}>Projetos</h1>

        {/* Card 1 */}
        <div
          className={style.card}
          onClick={() =>
            abrirCard({
              img: ImgCrd1,
              descricao:
                "Esta é uma página desenvolvida em Angular para demonstrar minhas habilidades em design e desenvolvimento web. O projeto apresenta um layout moderno e responsivo, focando na usabilidade e na experiência do usuário. ",
                ferramentas:"ANGULAR, HTML, SCSS, JAVASCRIPT, BOOSTRAP, BOOSTRAP ICONS, NETFLY, EXPRESS, KARMA, TYPESCRIPT, CYPRESS",
                a: "https://web-desing-page.netlify.app",

            })
          }
        >
          <div className={style.card_img}>
            <img src={ImgCrd1} alt="" />
            
          </div>
          <div className={style.card_flu}>
            <p>Data do projeto 2024</p>
            <Button>Saiba mais</Button>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className={style.card}
          onClick={() =>
            abrirCard({
              img: ImgCrd2,
              descricao:
                "Este portfólio foi desenvolvido utilizando Angular para demonstrar minhas habilidades em design e desenvolvimento web. O projeto apresenta um layout moderno e totalmente responsivo, com foco em usabilidade e experiência do usuário (UX).  ",
                ferramentas:"ANGULAR, HTML, SCSS, JAVASCRIPT, BOOSTRAP, BOOSTRAP ICONS, NETFLY, EXPRESS, KARMA, TYPESCRIPT, CYPRESS",
                a: "https://portfoolio-dv.netlify.app/",

            })
          }
        >
          <div className={style.card_img}>
            <img src={ImgCrd2} alt="" />
          </div>
          <div className={style.card_flu}>
            <p>Data do projeto 2024</p>
            <Button>Saiba mais</Button>
          </div>
        </div>
        {/* Card 3 */}
        <div
          className={style.card}
          onClick={() =>
            abrirCard({
              img: ImgCrd3,
              descricao:
                "Esta é uma página desenvolvida em Angular para o projeto Código Certo, focado em desenvolvimento web. O projeto apresenta um layout moderno e responsivo, priorizando a usabilidade e a experiência do usuário.",
                ferramentas:"ANGULAR, HTML, SCSS, JAVASCRIPT, BOOSTRAP, BOOSTRAP ICONS, NETFLY, EXPRESS, KARMA, TYPESCRIPT, CYPRESS",
                a: "https://codigo-certo.netlify.app",

            })
          }
        >
          <div className={style.card_img}>
            <img src={ImgCrd3} alt="" />
            
          </div>
          <div className={style.card_flu}>
            <p>Data do projeto 2024</p>
            <Button>Saiba mais</Button>
          </div>
        </div>
      </div>

      {/* SEGUNDA SEÇÃO DE CARDS */}
      <div className={style.main}>
      <div
          className={style.card}
          onClick={() =>
            abrirCard({
              img: ImgCrd4,
              descricao:
                "Esta é uma página desenvolvida em Angular para demonstrar minhas habilidades em design e desenvolvimento web. O projeto apresenta um layout moderno e responsivo, focando na usabilidade e na experiência do usuário. ",
                ferramentas:"ANGULAR, HTML, SCSS, JAVASCRIPT, BOOSTRAP, BOOSTRAP ICONS, NETFLY, EXPRESS, KARMA, TYPESCRIPT, CYPRESS",
                a: "https://web-desing-page.netlify.app",

            })
          }
        >
          <div className={style.card_img}>
            <img src={ImgCrd4} alt="" />
            
          </div>
          <div className={style.card_flu}>
            <p>Data do projeto 2024</p>
            <Button>Saiba mais</Button>
          </div>
        </div>
        {/* CARD 5 */}

        <div
          className={style.card}
          onClick={() =>
            abrirCard({
              img: ImgCrd5,
              descricao:
                "Esta é uma página desenvolvida em Angular para demonstrar minhas habilidades em design e desenvolvimento web. O projeto apresenta um layout moderno e responsivo, focando na usabilidade e na experiência do usuário. ",
                ferramentas:"ANGULAR, HTML, SCSS, JAVASCRIPT, BOOSTRAP, BOOSTRAP ICONS, NETFLY, EXPRESS, KARMA, TYPESCRIPT, CYPRESS",
                a: "https://landing-clinica.netlify.app",

            })
          }
        >
          <div className={style.card_img}>
            <img src={ImgCrd5} alt="" />
            
          </div>
          <div className={style.card_flu}>
            <p>Data do projeto 2024</p>
            <Button>Saiba mais</Button>
          </div>
        </div>
        {/* CARD 6 */}

        <div
          className={style.card}
          onClick={() =>
            abrirCard({
              img: ImgCrd6,
              descricao:
                "Esta é uma página desenvolvida em Angular para demonstrar minhas habilidades em design e desenvolvimento web. O projeto apresenta um layout moderno e responsivo, focando na usabilidade e na experiência do usuário. ",
                ferramentas:"ANGULAR, HTML, SCSS, JAVASCRIPT, BOOSTRAP, BOOSTRAP ICONS, NETFLY, EXPRESS, KARMA, TYPESCRIPT, CYPRESS",
                a: "https://hamburgueria-do-chef.netlify.app",

            })
          }
        >
          <div className={style.card_img}>
            <img src={ImgCrd6} alt="" />
            
          </div>
          <div className={style.card_flu}>
            <p>Data do projeto 2024</p>
            <Button>Saiba mais</Button>
          </div>
        </div>
      </div>

      {/* MODAL FICA AQUI*/}
      {selectedCard && (
        <Modal $isVisible={selectedCard !== null}>
          {selectedCard && (
            <>
              <img
                src={selectedCard.img}
                alt="Imagem do projeto"
                className="modal-img"
              />
              <div className="modal-content">
                <h2>Detalhes do Projeto</h2>
                <p>{selectedCard.descricao}</p>
                <h2>Ferramentas e Tecnologias Utilizadas:</h2>
                <b>{selectedCard.ferramentas}</b>
                <button onClick={fecharModal} className={style.modal_close}>
                  x
                </button>
                <a href={selectedCard.a}>Clique e veja o projeto</a>
              </div>
            </>
          )}
        </Modal>
      )}

      <img src={BkPerfil} className={style.BkPerfil} alt="" />
    </WrapperProjetos>
  );
}

export default Projetos;
