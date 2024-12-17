import React, { useEffect, useState } from "react";
import useDeviceDetection from "../../hooks/useDeviceDetection";

const CursorTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isMobile = useDeviceDetection(); // Utilise le hook

  const updateCursorPosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener("mousemove", updateCursorPosition);
      return () =>
        window.removeEventListener("mousemove", updateCursorPosition);
    }
  }, [isMobile]);

  if (isMobile) return null; // Ne rien afficher sur mobile

  return (
    <div
      className="pointer-events-none fixed z-50 w-20 h-20 rounded-full 
                 bg-blue-500 opacity-30 transition-transform duration-150 ease-out"
      style={{
        top: position.y - 40,
        left: position.x - 40,
      }}
    ></div>
  );
};

export default CursorTracker;
