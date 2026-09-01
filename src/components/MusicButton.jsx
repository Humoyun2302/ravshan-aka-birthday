import { useEffect, useRef, useState } from "react";

export default function MusicButton() {
  const audioRef = useRef(null);
  const [on, setOn] = useState(false);
  const [hidden, setHidden] = useState(false);
  const fadeRef = useRef(0);

  useEffect(() => {
    return () => {
      cancelAnimationFrame(fadeRef.current);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, []);

  const fadeTo = (audio, target, after) => {
    cancelAnimationFrame(fadeRef.current);
    const tick = () => {
      const diff = target - audio.volume;
      if (Math.abs(diff) < 0.03) {
        audio.volume = target;
        after?.();
        return;
      }
      audio.volume = Math.min(1, Math.max(0, audio.volume + Math.sign(diff) * 0.05));
      fadeRef.current = requestAnimationFrame(tick);
    };
    fadeRef.current = requestAnimationFrame(tick);
  };

  const toggle = async () => {
    if (hidden) return;
    let audio = audioRef.current;
    if (!audio) {
      audio = new Audio("/audio/birthday.mp3");
      audio.loop = true;
      audio.preload = "auto";
      audio.volume = 0;
      audio.addEventListener("error", () => {
        setHidden(true);
        setOn(false);
      });
      audioRef.current = audio;
    }

    if (!on) {
      try {
        await audio.play();
        fadeTo(audio, 0.4);
        setOn(true);
      } catch {
        setOn(false);
      }
    } else {
      fadeTo(audio, 0, () => audio.pause());
      setOn(false);
    }
  };

  if (hidden) return null;

  return (
    <button
      type="button"
      className={`music-btn ${on ? "is-on" : ""}`}
      onClick={toggle}
      aria-pressed={on}
      aria-label={on ? "Музикани ўчириш" : "Музикани ёқиш"}
    >
      <span aria-hidden="true">♪</span>
    </button>
  );
}
