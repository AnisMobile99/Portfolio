import { useState, useEffect } from "react";

const useDeviceDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const mobileRegex =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

    // Vérifie si l'appareil correspond à un appareil mobile
    setIsMobile(mobileRegex.test(userAgent));
  }, []);

  return isMobile; // Retourne true si l'appareil est mobile
};

export default useDeviceDetection;
