// import WrapperSobre from "../../components/WrapperSobre";
// import Card from "../../components/Card.style";

// IMPORT STYLES CSS
import style from "../../containers/Sobre/sobre.module.css";

// IMPORT IMG
import ImgPerfil from "../../assets/image/img_perfil_sobre/img_perfil.png";
import BkPerfil from "../../assets/image/img_perfil_sobre/Elipse-1.webp";

function Sobre() {
  return (
    <main id="sobre" className={style.main}>
      <div className={style.card_1}>
        {/* AQUI FICA A ANIMÇÃO DO ICONS ROLANDO PARA A ESQUERDA -LEFT */}
        <p className={style.bk_filter}></p>
        <div>
          <i className="bi bi-code-square" title="Código"></i>
          <i className="bi bi-braces-asterisk" title="Braces Asterisk"></i>
          <i className="bi bi-filetype-js" title="Node.js"></i>
          <i className="bi bi-chat-dots" title="Comunicação"></i>
          <i className="bi bi-stack" title="Tecnologia Full Stack"></i>
          <i className="bi bi-laptop" title="Desenvolvimento Web"></i>
          <i className="bi bi-filetype-ts" title="TypeScript"></i>
          <i className="bi bi-activity" title="Responsividade"></i>
          <i className="bi bi-filetype-scss" title="SCSS"></i>
          <i className="bi bi-filetype-sass" title="SASS"></i>
          <i className="bi bi-filetype-html" title="HTML"></i>
          <i className="bi bi-hdd" title="Banco de Dados"></i>
          <i className="bi bi-filetype-tsx" title="TypeScript JSX"></i>
          <i className="bi bi-bootstrap" title="Bootstrap"></i>
          <i className="bi bi-github" title="GitHub"></i>
          <i className="bi bi-figma" title="Figma"></i>
          <i className="bi bi-stack" title="Tecnologia Full Stack"></i>
          <i className="bi bi-laptop" title="Desenvolvimento Web"></i>
          <i className="bi bi-cloud" title="Cloud Computing"></i>
          <i className="bi bi-hdd" title="Banco de Dados"></i>
          <i className="bi bi-server" title="Servidores"></i>
          <i className="bi bi-terminal" title="Terminal"></i>
          <i className="bi bi-chat-dots" title="Comunicação"></i>
          <i className="bi bi-gear" title="Configurações"></i>
          <i className="bi bi-lock-fill" title="Segurança"></i>
          <i className="bi bi-hdd" title="Banco de Dados"></i>
          <i className="bi bi-server" title="Servidores"></i>
          <i className="bi bi-terminal" title="Terminal"></i>
          <i className="bi bi-chat-dots" title="Comunicação"></i>
          <i className="bi bi-gear" title="Configurações"></i>
          <i className="bi bi-lock-fill" title="Segurança"></i>
          {/* <!-- Ícones adicionais --> */}
         
        </div>
        <p className={style.bk_filter_rigth}></p>
      </div>

      {/* AQUI FICA OS DOIS CARDS DA SECTION SOBRE */}

      <div className={style.cards}  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="3000">
        <h1 className={style.titulo}>
          Olá, eu sou Erivelton Magalhães{" "}
          <i className="bi bi-person-badge-fill"></i>
        </h1>

        <p className={style.p_dev}>
        Formado em Análise e Desenvolvimento de Sistemas, sou desenvolvedor Front-end e Web Designer com especialização em Google Cloud Computing. Atualmente, estou expandindo meus conhecimentos cursando Desenvolvimento Full Stack e Ciência da Computação. Minha paixão por tecnologia e design me capacita a criar soluções eficientes, inovadoras e visualmente atraentes, com foco em performance e usabilidade. Tenho experiência prática com ferramentas como Angular e React, e estou sempre explorando novas tecnologias e tendências para otimizar meus projetos, proporcionando uma experiência de usuário envolvente e intuitiva.
        </p>
      </div>
      {/* AQUI FICA A  IMAGEM DO CARD 2 PERFIl */}
      <div className={style.cards} data-aos="fade-up" data-aos-duration="1000">
        <div
          className={style.div_img_perfil}
          data-aos="zoom-out-up"
          data-aos-duration="1000"
        >
          <img
            src={ImgPerfil}
            className={style.img}
            alt="Imagem do desenvolvedor"
          />
        </div>
        {/* AQUI FICA OS ICONS DO PERFIL */}
        <div className={style.bk_perfil}></div>
        <div className={style.bk_perfil}>
          <img src={BkPerfil} alt="" />
        </div>
      </div>
    </main>
  );
}
export default Sobre;
