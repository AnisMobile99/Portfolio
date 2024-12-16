import React, { useState } from "react";
import SkillCard from "./SkillCard";
import SkillsHeader from "./SkillsHeader";
import { categoriesData, skillsData } from "./SkillsData";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAllSkills, setShowAllSkills] = useState(false);

  const MAX_VISIBLE_SKILLS = 15; // 4 lignes de 6 compétences = 24 compétences visibles max

  // Filtrer les compétences en fonction de la catégorie sélectionnée
  const filteredSkills =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  // Limiter le nombre de compétences affichées
  const visibleSkills = showAllSkills
    ? filteredSkills
    : filteredSkills.slice(0, MAX_VISIBLE_SKILLS);

  return (
    <section
      id="skills"
      className="flex justify-center items-center py-12 px-4 bg-gray-100 dark:bg-black transition-all pt-20"
    >
      <div className="w-full max-w-screen-lg">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Mes Compétences
        </h2>

        {/* Filtre avec icônes */}
        <SkillsHeader
          categories={categoriesData}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Grille des compétences */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-6">
          {visibleSkills.map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              icon={skill.icon}
              color={skill.color}
            />
          ))}
        </div>

        {/* Bouton "Voir plus" */}
        {selectedCategory === "All" &&
          filteredSkills.length > MAX_VISIBLE_SKILLS && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowAllSkills(!showAllSkills)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                {showAllSkills ? "Voir moins" : "Voir plus"}
              </button>
            </div>
          )}
      </div>
    </section>
  );
};

export default Skills;
