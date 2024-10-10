import styled from "styled-components";

const MiniCard = styled.div`
  width: 23%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  flex-wrap:wrap;
  border-radius: 10px;
  border: 1px solid var(--gray);
  background-image: linear-gradient(
    10deg,
    black 0%,
    #000000dd 20%,
    #00000032 100%
  );
  text-align: center;
  padding: 1rem;



  & b{
    font-family:Purista;
    transition:0.5s;
    background: linear-gradient(to left, rgba(0, 0, 255, 1), rgba(150, 0, 255, 1));
  -webkit-background-clip: text; /* Para Safari */
  -webkit-text-fill-color: transparent; /* Para Safari */
  color: transparent; /* Para outros navegadores */
  transition: none !important; /* Mantém a transição como none */
  white-space: normal;
 
  }


  & .bi {
    color: var( --gray);
    font-size:1.8vw;
    transition:3s;
  }
 

  & p {
    color: var( --secondary);
    font-size:1vw;
    transition:0.5s;
    font-family:SpaceGrotesk-VariableFont;
  }
`;

export default MiniCard;
