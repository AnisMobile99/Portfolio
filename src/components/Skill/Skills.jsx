import React, { useState, useRef } from "react";
import SkillCard from "./SkillCard";
import SkillsHeader from "./SkillsHeader";
import { categoriesData, skillsData } from "./SkillsData";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const scrollRef = useRef(null);

  const handleCategoryChange = (direction) => {
    const currentIndex = categoriesData.findIndex(
      (category) => category.name === selectedCategory
    );

    let newIndex =
      direction === "next"
        ? (currentIndex + 1) % categoriesData.length
        : (currentIndex - 1 + categoriesData.length) % categoriesData.length;

    const newCategory = categoriesData[newIndex].name;
    setSelectedCategory(newCategory);
    resetScrollPosition();
  };

  const resetScrollPosition = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const filteredSkills =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section
      id="skills"
      className="flex justify-center items-center py-12 px-4 bg-gray-100 dark:bg-black transition-all pt-20"
    >
      <div className="w-full max-w-screen-lg">
        {/* Titre */}
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Mes Compétences
        </h2>

        {/* Header des catégories */}
        <SkillsHeader
          categories={categoriesData}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onNextCategory={() => handleCategoryChange("next")}
          onPrevCategory={() => handleCategoryChange("prev")}
        />

        {/* Grille des compétences scrollable horizontalement */}
        <div
          ref={scrollRef}
          className="grid grid-rows-2 grid-flow-col gap-6 overflow-x-auto no-scrollbar mt-6"
          style={{ scrollSnapType: "x mandatory", padding: "10px" }}
        >
          {filteredSkills.map((skill, index) => (
            <div
              key={`${selectedCategory}-${index}`}
              className="flex-none w-36 animate-fade-in"
              style={{
                scrollSnapAlign: "center",
              }}
            >
              <SkillCard
                name={skill.name}
                icon={skill.icon}
                color={skill.color}
                rating={skill.rating} // Passe le rating ici
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
