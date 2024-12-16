import React from "react";
import ReactDOM from "react-dom/client"; // Modifie l'importation de ReactDOM
import App from "./App";
import reportWebVitals from "./reportWebVitals"; // Assure-toi que reportWebVitals est bien importé
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";

// Crée le root pour ton application
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
// Si tu veux mesurer les performances de ton application, passe une fonction
// pour enregistrer les résultats (par exemple : reportWebVitals(console.log))
// ou envoie les résultats à un endpoint d'analyse. Apprends-en plus ici : https://bit.ly/CRA-vitals
reportWebVitals();
