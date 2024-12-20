import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import useGeoJSON from "../../hooks/useGeoJSON";
import useDeviceDetection from "../../hooks/useDeviceDetection";

const FranceMapRegions = () => {
  const { geoData, loading } = useGeoJSON(
    "https://france-geojson.gregoiredavid.fr/repo/regions.geojson"
  );
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const isMobile = useDeviceDetection();

  const availableRegions = [
    {
      name: "Île-de-France",
      departments: ["Paris (75)"],
    },
    {
      name: "Provence-Alpes-Côte d'Azur",
      departments: [
        "Marseille (13)",
        "Nice (06)",
        "Aix-En-Provence(13)",
        "Antibes(06600)",
      ],
    },
    {
      name: "Hauts-de-France",
      departments: ["Lille (59)"],
    },
    {
      name: "Auvergne-Rhône-Alpes",
      departments: ["Lyon (69)", "Grenoble(38100)"],
    },
    {
      name: "Occitanie",
      departments: ["Toulouse (31)"],
    },
  ];

  if (loading) {
    return (
      <p className="text-gray-700 dark:text-gray-300 text-center">
        Chargement de la carte...
      </p>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
        Disponibilité par région
      </h2>
      <div className="flex-1 w-full h-[60vh] flex items-center justify-center">
        <ComposableMap
          projectionConfig={{
            center: [2.5, 46.5],
            scale: isMobile ? 1800 : 1000, // Zoom par défaut adapté au mobile ou bureau
          }}
          style={{ width: "100%", height: "100%" }}
        >
          <ZoomableGroup>
            <Geographies geography={geoData}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const regionName = geo.properties.nom;
                  const regionData = availableRegions.find(
                    (region) => region.name === regionName
                  );
                  const isAvailable = Boolean(regionData);

                  return (
                    <g key={geo.rsmKey}>
                      <Geography
                        geography={geo}
                        onMouseEnter={() => setHoveredRegion(regionName)}
                        onMouseLeave={() => setHoveredRegion(null)}
                        style={{
                          default: {
                            fill: isAvailable
                              ? "rgba(30, 58, 138, 0.9)" // Bleu foncé pour les régions disponibles
                              : "rgba(191, 219, 254, 0.5)", // Bleu clair pour les autres
                            stroke: "white",
                            strokeWidth: 0.5,
                            outline: "none",
                            cursor: "pointer", // Change le curseur en "main"
                          },
                          hover: {
                            fill: "rgba(59, 130, 246, 0.8)", // Bleu vif au survol
                            stroke: "white",
                            strokeWidth: 1,
                            outline: "none",
                          },
                          pressed: {
                            fill: "rgba(37, 99, 235, 1)", // Bleu foncé au clic
                            stroke: "white",
                            strokeWidth: 1,
                            outline: "none",
                          },
                        }}
                      />
                    </g>
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
      {hoveredRegion && (
        <div className="absolute bottom-4 text-center text-lg font-semibold text-gray-800 dark:text-white">
          <p>Région : {hoveredRegion}</p>
          <ul className="text-sm text-gray-600 dark:text-gray-300">
            {availableRegions
              .find((region) => region.name === hoveredRegion)
              ?.departments.map((dept, index) => (
                <li key={index}>{dept}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FranceMapRegions;
