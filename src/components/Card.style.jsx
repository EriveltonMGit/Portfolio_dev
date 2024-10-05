import styled from "styled-components";
// AQUI FICA A DIV DOS CARDS NA SECTION INICIO CARD 1 E CARD 2 
const Card = styled.div`
  /* border: 1px solid var(--gray); */
  position:relative;
  width: 46%;
  height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  border-radius: 10px;
  z-index:3;
  flex-wrap:wrap;

  
  
  
  & span {
    width: 40%;
    height: 0.5vh;
  
    border-bottom-left-radius:5px;
    border-top-left-radius:5px;
   background-image:linear-gradient(45deg, #dc3545, #dc3545, #2427301f);
    position: absolute;
    left: 0;
    top: 0;
  }

  



`;

export default Card;
