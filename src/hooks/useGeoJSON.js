import { useState, useEffect } from "react";

const useGeoJSON = (url) => {
  const [geoData, setGeoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGeoData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setGeoData(data);
      } catch (error) {
        console.error("Erreur lors du chargement des données GeoJSON:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGeoData();
  }, [url]);

  return { geoData, loading };
};

export default useGeoJSON;
