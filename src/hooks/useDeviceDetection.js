import { useState, useEffect } from "react";

const useDeviceDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(
        window.innerWidth <= 768 || /Mobi|Android/i.test(navigator.userAgent)
      );
    };

    checkDevice(); // Vérifie au montage
    window.addEventListener("resize", checkDevice); // Écoute le redimensionnement

    return () => window.removeEventListener("resize", checkDevice); // Nettoyage
  }, []);

  return isMobile; // Retourne true si l'appareil est mobile
};

export default useDeviceDetection;
