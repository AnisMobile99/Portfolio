import React, { useEffect, useState } from "react";

const CursorTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Fonction pour mettre à jour la position de la souris
  const updateCursorPosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateCursorPosition);
    return () => window.removeEventListener("mousemove", updateCursorPosition);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-50 w-20 h-20 rounded-full 
                 bg-blue-500 opacity-30 transition-transform duration-150 ease-out"
      style={{
        top: position.y - 40, // Ajuste pour centrer le cercle sur le curseur
        left: position.x - 40, // Ajuste pour centrer le cercle sur le curseur
      }}
    ></div>
  );
};

export default CursorTracker;
