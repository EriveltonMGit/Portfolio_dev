
// IMPORT CSS
import Style from "./footer.module.css";

function Footer() {
  return (
    <section id="contato" className={Style.section}>
      <footer id="contato" className={Style.footer}>
        <div className={Style.container} >
          {/* Sobre */}
          <div className={Style.footerColumn} data-aos="fade-right" data-aos-duration="3000">
            <h5 className={Style.footerTitle}>Sobre</h5>
            <p className={Style.footerText}>
              Ofereço serviços de alta qualidade com foco em atender as
              necessidades dos clientes em todas as fases do projeto.
            </p>
          </div>

          {/* Serviços */}
          <div className={Style.footerColumn} data-aos="fade-up"
     data-aos-duration="3000">
            <h5 className={Style.footerTitle}>Serviços</h5>
            <ul className={Style.footerList}>
              <li>
               <a href="#!">  <i className="bi bi-person-raised-hand"></i>Consultoria</a>
              </li>
              <li>
                
                <a href="#!"><i className="bi bi-laptop"></i>{" "}Desenvolvimento</a>
              </li>
              <li>
                 <a href="#!"><i className="bi bi-headset"></i>Suporte</a>
              </li>
              <li>
               
                <a href="#!"> <i className="bi bi-microsoft-teams"></i>{" "}Treinamento</a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className={Style.footerColumn} data-aos="fade-up"
     data-aos-duration="3000">
            <h5 className={Style.footerTitle}>Contato</h5>
            <ul className={Style.footerList}>
              <li><a href="">    <i className="bi bi-whatsapp"> whatsapp</i></a>
      
              </li>
              <li>
                
                <a href="mailto:email@example.com"><i className="bi bi-envelope-arrow-up"></i>{" "}Email: Acesse</a>
              </li>
              <li>
               <a href=""> <i className="bi bi-telephone-outbound-fill"></i>Contato</a>
              </li>
              <li>
               
                <a
                  href="https://maps.app.goo.gl/Fy5hP6F9agGcPBGW9"
                  target="_blank"
                  rel="noopener noreferrer"
                > <i className="bi bi-geo-fill"></i>{" "}
                  DF - Brasília
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className={Style.footerColumn} data-aos="fade-left" data-aos-duration="3000">
            <h5 className={Style.footerTitle}>Siga-me</h5>
            <div className={Style.socialLinks}>
              <a
                href="https://wa.me/5561981579569"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="#!" className={Style.socialIcon}>
                <i className="bi bi-github"></i>
              </a>
              <a href="#!" className={Style.socialIcon}>
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/erivelton-magalh%C3%A3es-553a6b215/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className={Style.copyright}>
          © 2024 Copyright: Todos os direitos reservados.
        </div>
      </footer>
    </section>
  );
}

export default Footer;
