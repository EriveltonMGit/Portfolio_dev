import React, { useEffect, useState } from 'react';


const TypingEffect = () => {
  // Coloque aqui os textos que você quer exibir
  const phrases = [
    'Olá! Seja bem-vindo! ',
    'Ao meu portfólio',
    'Meu nome é Erivelton Magalhaes.',
    'Sou desenvolvedor front-end.',
    'E esse é meu primeiro projeto ',
    'Criado com React, espero que goste',
    'Vamos construir algo juntos?',
    'Entre em contato,',
    'Estou ansioso para conversar!'
  ];

  const [displayedText, setDisplayedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    if (charIndex < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + currentPhrase.charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, 70); // Velocidade de digitação

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setDisplayedText('');
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }, 1300); // Tempo antes de começar a próxima frase

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
