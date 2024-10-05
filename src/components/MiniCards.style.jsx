import styled from "styled-components";

const MiniCard = styled.div`
  width: 23%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
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
    color:var( --danger);
  }


  & .bi {
    color: var( --gray);
    font-size:2vw;
    transition:0.5s;
  }
 

  & p {
    color: var( --secondary);
    font-size:1vw;
    transition:0.5s;
    font-family:SpaceGrotesk-VariableFont;
  }
`;

export default MiniCard;
