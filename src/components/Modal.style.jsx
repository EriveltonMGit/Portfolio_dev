import styled from "styled-components";

const Modal = styled.main`
  /* Estilos existentes */
  width: 60%;
  height: 70vh;
  position: absolute;
  top: 20vh;
  left: 20%;
  z-index: 10;
  backdrop-filter: blur(10px);
  display: ${({ $isVisible }) => ($isVisible ? "flex" : "none")};
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  gap: 20px;
  overflow: hidden;

  .modal-img {
    width: 30vw;
    height: auto;
    border-radius: 10px;
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    width: 100%;
    height: 100%;

    h2 {
      margin: 0;
      font-size: 1rem;
      font-family: Poppins;
    }

    p {
      margin: 0;
      font-size: 1rem;
      font-family: SpaceGrotesk-VariableFont;
    }

    b {
      margin: 0;
      font-family: SpaceGrotesk-VariableFont;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      width: 50%;
      height: 70%;
      font-size: 0.9vw;
      overflow: hidden;
      overflow-y: scroll;
      padding: 0.5rem;
    }

    button {
      background-color: var(--danger);
      position: absolute;
      top: 0;
      right: 0;
      width: 5vw;
      border-radius: 4px;
      font-family: gotham-black;
      font-size: 1vw;
      transition: 0.5s;
      margin-top: -3vh;
    }

    button:hover {
      box-shadow: 1px 1px 1rem black;
    }
  }

  /* Media query para telas menores */
  @media (max-width: 480px) {
    width: 90%;
    left: 5%;
    height: 60vh;
    padding: 10px;
    display: flex;
    flex-direction: column;
    position:fixed;

    .modal-img {
      width: 30vw; 
    }

    .modal-content {
      gap: 5px; 
      

      h2 {
        font-size: 4.5vw; 
      }

      p {
        font-size: 4vw; 
      }

      b {
        font-size: 4vw; 
        width: 100%; 
        height: auto; 
      }

      button {
        background-color: var(--danger);
        position: absolute;
        top: 0;
        right: 0;
        width: 20vw;
        border-radius: 4px;
        font-family: gotham-black;
        font-size: 4vw;
        transition: 0.5s;
        margin-top: -15vh;
      }
    }
  }

/* Estilos para celulares grandes em modo retrato */
@media screen and (min-width: 481px) and (max-width: 768px) and (orientation: portrait){
  width: 90%;
    left: 5%;
    height: 90vh;
    margin-top: -10vh;
    padding: 10px;
    display: flex;
    flex-direction: column;
    position:fixed;

    .modal-img {
      width: 30vw; 
    }

    .modal-content {
      gap: 5px; 
      

      h2 {
        font-size: 4.5vw; 
      }

      p {
        font-size: 4vw; 
      }

      b {
        font-size: 4vw; 
        width: 100%; 
        height: auto; 
      }

      button {
        background-color: var(--danger);
        position: absolute;
        top: 0;
        right: 0;
        width: 20vw;
        border-radius: 4px;
        font-family: gotham-black;
        font-size: 4vw;
        transition: 0.5s;
        margin-top: -20vh;
      }
    }
}


  /* Media query para telas menores */
  @media screen and (min-width: 769px) and (max-width: 1024px) and (orientation: portrait){
    width: 90%;
    left: 5%;
    height: 90vh;
    margin-top: -10vh;
    padding: 10px;
    display: flex;
    flex-direction: column;
    position:fixed;

    .modal-img {
      width: 30vw; 
    }

    .modal-content {
      gap: 5px; 
      

      h2 {
        font-size: 4.5vw; 
      }

      p {
        font-size: 4vw; 
      }

      b {
        font-size: 4vw; 
        width: 100%; 
        height: auto; 
      }

      button {
        background-color: var(--danger);
        position: absolute;
        top: 0;
        right: 0;
        width: 20vw;
        border-radius: 4px;
        font-family: gotham-black;
        font-size: 4vw;
        transition: 0.5s;
        margin-top: -20vh;
      }
    }
  }
`;

export default Modal;
