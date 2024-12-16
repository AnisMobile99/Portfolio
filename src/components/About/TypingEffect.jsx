import React, { useState, useEffect } from "react";

const TypingEffect = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      } else {
        // Réinitialiser l'animation pour la boucle infinie
        setDisplayedText("");
        setIndex(0);
      }
    }, speed);

    return () => clearTimeout(timeout); // Nettoie le timeout
  }, [index, text, speed]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;
