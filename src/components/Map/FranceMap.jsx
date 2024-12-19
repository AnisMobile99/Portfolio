import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import useGeoJSON from "../../hooks/useGeoJSON";
import useDeviceDetection from "../../hooks/useDeviceDetection";

const FranceMap = ({ availableDepartments }) => {
  const { geoData, loading } = useGeoJSON(
    "https://france-geojson.gregoiredavid.fr/repo/departements.geojson"
  );
  const [hoveredDepartment, setHoveredDepartment] = useState(null);
  const isMobile = useDeviceDetection(); // Utilise le hook

  if (loading) {
    return (
      <p className="text-gray-700 dark:text-gray-300 text-center">
        Chargement de la carte...
      </p>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Disponibilité par département
      </h2>
      <div className="flex-1 w-full h-[70vh] flex items-center justify-center">
        <ComposableMap
          projectionConfig={{
            center: [2.5, 42.5], // Centrer la France
            scale: isMobile ? 4000 : 1200, // Zoom par défaut
          }}
          style={{ width: "100%", height: "100%" }}
        >
          <ZoomableGroup>
            <Geographies geography={geoData}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const departmentCode = geo.properties.code; // Code du département
                  const departmentName = geo.properties.nom; // Nom du département
                  const isAvailable =
                    availableDepartments.includes(departmentCode);

                  // Calculer un centre approximatif si 'centre' n'existe pas
                  const centroid =
                    geo.geometry.type === "Polygon"
                      ? geo.geometry.coordinates[0]
                          .reduce(
                            (acc, coord) => [
                              acc[0] + coord[0],
                              acc[1] + coord[1],
                            ],
                            [0, 0]
                          )
                          .map(
                            (val) => val / geo.geometry.coordinates[0].length
                          )
                      : [0, 0]; // Par défaut si Polygon n'existe pas

                  return (
                    <g key={geo.rsmKey}>
                      {/* Département */}
                      <Geography
                        geography={geo}
                        onMouseEnter={() =>
                          setHoveredDepartment(departmentName)
                        }
                        onMouseLeave={() => setHoveredDepartment(null)}
                        style={{
                          default: {
                            fill: isAvailable
                              ? "rgba(0, 0, 0, 0.8)" // Noir intense pour les départements disponibles
                              : "rgba(200, 200, 200, 0.5)", // Gris clair pour les autres
                            stroke: "white",
                            strokeWidth: 0.5,
                            outline: "none",
                          },
                          hover: {
                            fill: "rgba(0, 123, 255, 0.8)", // Bleu vif au survol
                            stroke: "white",
                            strokeWidth: 1,
                            outline: "none",
                          },
                          pressed: {
                            fill: "rgba(0, 123, 255, 1)", // Bleu foncé au clic
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
      {hoveredDepartment && (
        <div className="absolute bottom-4 text-xl font-semibold text-gray-800 dark:text-white">
          Département survolé : {hoveredDepartment}
        </div>
      )}
    </div>
  );
};

export default FranceMap;
