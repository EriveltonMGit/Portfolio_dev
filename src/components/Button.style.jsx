import styled from "styled-components";

const Button = styled.button`
  width: 30%;
  border-radius: 5px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  font-family: Purista;
  transition: 0.5s;
  font-size: 0.9vw;
  font-weight: bolder;
  background: linear-gradient(
    to left,
    rgba(0, 0, 255, 1),
    rgba(150, 0, 255, 1)
  );
  color: black;

  &:hover {
    box-shadow: 1px 1px 1rem white;
    color: white;
  }

  /* Media query para telas menores */
  @media (max-width: 480px) {
    width: 40%; 
    font-size: 3vw; 
    padding: 1rem; 
  }
`;

export default Button;
