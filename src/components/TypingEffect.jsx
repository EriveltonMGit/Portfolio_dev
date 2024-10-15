/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const TypingEffect = () => {
  // Coloque aqui os textos que você quer exibir
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const phrases = [
    "Bem-vindo ao meu portfólio!",
    "Meu nome é Erivelton Magalhães.",
    "Sou desenvolvedor front-end.",
    "Estou aqui para ajudar você a construir seu site!",
    "Utilizo as tecnologias mais atuais do mercado.",
    "Transformo sua ideia em uma experiência virtual atraente."
    
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    if (charIndex < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentPhrase.charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, 70); // Velocidade de digitação

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setDisplayedText("");
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }, 1600); // Tempo antes de começar a próxima frase

      return () => clearTimeout(timeout);
    }
  }, [charIndex, phraseIndex, phrases]);

  return (
    <div className="">
      {displayedText}
      <b className="blinking-cursor">|</b>
    </div>
  );
};

export default TypingEffect;
