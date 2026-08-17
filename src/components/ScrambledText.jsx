import { useState, useEffect, useRef, useCallback } from 'react'

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%-+=<>[]*?";

export default function ScrambledText({ text, className = "" }) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);
  const isAnimating = useRef(false);

  const startScramble = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    let iteration = 0;

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(() => {
        return text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");
      });

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
        isAnimating.current = false;
      }

      iteration += 1 / 3;
    }, 30);
  }, [text]);

  useEffect(() => {
    startScramble();
    return () => clearInterval(intervalRef.current);
  }, [startScramble]);

  return (
    <span
      className={`cursor-default ${className}`}
      onMouseEnter={startScramble}
    >
      {displayText}
    </span>
  );
}
