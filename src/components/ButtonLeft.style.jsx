import styled from "styled-components"


const ButtonLeft = styled.button`
 border-radius:10px;
 background-color:white;
 position: absolute;
 bottom:0;
 left: 0;
 padding: 0.5rem;
 width:30%;
 display:flex;
 align-items:center;
 justify-content: space-around;
 font-family:SpaceGrotesk-VariableFont;
 font-size:1vw;
 background-color:inherit;
 color:var( --secondary);
 transition:0.5s;
  border: 1px solid var(--gray);
  z-index:5;


&:hover{
    background-color:var(--gray);
    color:var(--light);
    box-shadow:1px 1px 1rem var(--gray);
 }

& i{
    color:var(--teal);
    animation: slide_arrow infinite 3s linear;
    transition:0.5s;
    font-weight:bolder;
}
&:hover i{
color:var(--teal);
}
@keyframes slide_arrow {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0);
  }
}


`

export default ButtonLeft