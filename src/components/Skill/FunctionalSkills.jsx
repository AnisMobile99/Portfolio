import React from "react";
import { FaUsers, FaClock, FaBrain, FaAward } from "react-icons/fa";

const functionalSkills = [
  {
    title: "Travail d'équipe",
    description: "Collaboration efficace et communication transparente",
    icon: <FaUsers />,
  },
  {
    title: "Gestion du temps",
    description: "Organisation et respect des délais",
    icon: <FaClock />,
  },
  {
    title: "Résolution de problèmes",
    description: "Approche analytique et solutions innovantes",
    icon: <FaBrain />,
  },
  {
    title: "Apprentissage continu",
    description: "Veille technologique et adaptation rapide",
    icon: <FaAward />,
  },
];

const FunctionalSkills = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {functionalSkills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center 
                     bg-white dark:bg-[#121212] rounded-lg 
                     shadow-2xl dark:shadow-[0px_10px_25px_rgba(255,255,255,0.4)]  hover:shadow-[0px_10px_25px_rgba(0,0,0,0.4)] 
                     p-6 transition-all duration-300 dark:hover:shadow-[0px_10px_25px_rgba(255,255,255,0.4)] "
        >
          {/* Icône */}
          <div className="text-blue-500 dark:text-blue-300 text-4xl mb-3">
            {skill.icon}
          </div>
          {/* Titre */}
          <h3 className="font-semibold text-gray-700 dark:text-gray-100 text-center">
            {skill.title}
          </h3>
          {/* Description */}
          <p className="text-gray-500 dark:text-gray-300 text-sm text-center">
            {skill.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FunctionalSkills;
