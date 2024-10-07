import styled from "styled-components";

const NavBar = styled.ul`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0;

  & li {
    height: 100%;
    width: 10%;
    margin-right: 2vw;
    display: flex;
    align-items: center;
    justify-content: center;
   
  }

  & a {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    color: var(  --secondary);
    transition: color 0.5s;
    text-decoration:none;
    font-family: Purista;
    font-size:0.9vw;
   
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0%;
      width: 0;
      height: 2px;
      background-color: white;
      transition: width 0.5s ease, left 0.5s ease;
    
    }

    &:hover::after {
      width: 100%;
      left: 0;
    
    }

    &:hover{
      color: var(  --light);
    }



    /* ANIMACAO .bi */
    & .bi{
      font-size:1vw;
      transition: 0.5s;
      color: var(  --secondary);
    }
    &:hover .bi{
        color:var(--info);
      }
  }
`;

export default NavBar;
