import styled from "styled-components";

const CarTecnologias = styled.div`
  border: 1px solid var(--gray);
  width: 18%;
  height: 25vh;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  transition: 1s;
  background-image: linear-gradient(
    10deg,
    black 0%,
    #000000dd 20%,
    #00000032 100%
  );
  position: relative;
  overflow: hidden;

  /* Estilo do pseudo-elemento ::after */
  &::after {
    content: "";
    background-color: #ffffff;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0;
    transition: height 0.5s ease;
    z-index: -1;
  }

  /* Efeito ao passar o mouse (hover) */
  &:hover::after {
    height: 100%;
  
  }

 

`;

export default CarTecnologias;
