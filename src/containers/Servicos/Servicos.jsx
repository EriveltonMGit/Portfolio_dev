import style from "./serv.module.css";
// IMPORT IMG 
import Img1 from '../../assets/icons/icons_servicos/icon-design.png'
import Img2 from '../../assets/icons/icons_servicos/icon-front.png'
import Img3 from '../../assets/icons/icons_servicos/icon-app-design.png'

function Servicos() {
  return (
    <main className={style.main} id="servicos">
        <h1 className={style.h1}>Serviços</h1>
      {/* CARD 1 */}
      <div className={style.cards}  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
        {/* AQUI FICA O ICON */}
        <div className={style.img}>
          <img src={Img1} alt="" />
                
        </div>
        <h2 className={style.h2}>Responsividade</h2>
        <p className={style.p}>Desenvolvo interfaces claras e objetivas, com foco em garantir uma experiência perfeita em todos os dispositivos. Meu trabalho prioriza a responsividade, adaptando o design para telas de diferentes tamanhos, proporcionando uma navegação fluida e acessível.</p>
      </div>
      {/* CARD 2 */}
      <div className={style.cards} data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
           {/* AQUI FICA O ICON */}
           <div className={style.img}>
          <img src={Img2} alt="" />
                
        </div>
        <h2 className={style.h2}>UI Desing</h2>
        <p className={style.p}>Crio interfaces claras, objetivas e, acima de tudo, intuitivas, garantindo uma experiência de uso agradável e eficiente. O foco é sempre facilitar a interação do usuário com o design, proporcionando navegabilidade e usabilidade sem complicações.</p>
      </div>
      {/* CARD 3 */}
      <div className={style.cards} data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="3000">
           {/* AQUI FICA O ICON */}
           <div className={style.img}>
          <img src={Img3} alt="" />
                
        </div>
        <h2 className={style.h2}>Desenvolvimento</h2>
        <p className={style.p}>Desenvolvo sites profissionais, blogs, portfólios, landing pages e diversas outras soluções digitais, sempre com foco em performance, estética e funcionalidade para atender às suas necessidades</p>
      </div>
      
      
    </main>
  );
}

export default Servicos;
