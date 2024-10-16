import { useState, useRef } from "react";
import style from "./serv.module.css"; // Certifique-se de ter estilos CSS para a classe .mediaPlayer

const MediaPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((error) => {
          console.error("Erro ao tentar tocar o áudio:", error);
        });
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (event) => {
    const { value } = event.target;
    audioRef.current.currentTime = value;
    setCurrentTime(value);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className={style.mediaPlayer}>
      <button onClick={togglePlayPause} className="btn">
        <i className={`bi ${isPlaying ? 'bi-pause' : 'bi-play'}`}></i>
      </button>
      <audio 
        ref={audioRef} 
        onEnded={() => setIsPlaying(false)} 
        onTimeUpdate={handleTimeUpdate} 
        onLoadedMetadata={handleLoadedMetadata}
      >
        <source src="/src/assets/frame/That'sWhatILike.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <div className={style.progressContainer}>
        <input 
          type="range" 
          min="0" 
          max={duration} 
          value={currentTime} 
          onChange={handleSeek} 
          className={style.progressBar} 
        />
      </div>
      <div className={style.timeDisplay}>
        {formatTime(currentTime)} / {formatTime(duration)}
      </div>
    </div>
  );
};

export default MediaPlayer;
