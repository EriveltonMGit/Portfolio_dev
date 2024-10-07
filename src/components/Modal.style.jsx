import styled from "styled-components";

const Modal = styled.main`
  /* Estilos existentes */
  width: 60%;
  height: 70vh;
  position: fixed;
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
      font-size: 0.5;
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
`;

export default Modal;
