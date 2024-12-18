import React, { useState, useRef, useEffect } from "react";
import SkillCard from "./SkillCard";
import SkillsHeader from "./SkillsHeader";
import { categoriesData, skillsData } from "./SkillsData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useDeviceDetection from "../../hooks/useDeviceDetection";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const scrollRef = useRef(null);
  const isMobile = useDeviceDetection();

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

  const scrollHorizontally = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    resetScrollPosition();
  }, [selectedCategory]);

  const filteredSkills =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section
      id="skills"
      className="flex justify-center items-center py-12 px-4 bg-gray-100 dark:bg-black transition-all pt-20 relative"
    >
      <div className="relative w-full max-w-screen-lg">
        {/* Titre */}
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Mes Compétences
        </h2>

        {/* Header des catégories */}
        <SkillsHeader
          categories={categoriesData}
          selectedCategory={selectedCategory}
          onSelectCategory={(category) => {
            setSelectedCategory(category);
            resetScrollPosition();
          }}
          onNextCategory={() => handleCategoryChange("next")}
          onPrevCategory={() => handleCategoryChange("prev")}
        />

        {/* Flèches de navigation centrées verticalement */}
        {!isMobile && (
          <>
            {/* Flèche gauche */}
            <button
              onClick={() => scrollHorizontally("left")}
              className="absolute left-0 top-1/2 transform -translate-y-[50%] bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all z-10"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>

            {/* Flèche droite */}
            <button
              onClick={() => scrollHorizontally("right")}
              className="absolute right-0 top-1/2 transform -translate-y-[50%] bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all z-10"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Grille des compétences scrollable horizontalement */}
        <div
          ref={scrollRef}
          className="grid grid-rows-2 grid-flow-col gap-6 overflow-x-auto no-scrollbar mt-6"
          style={{ scrollSnapType: "x mandatory", padding: "10px" }}
        >
          {filteredSkills.map((skill, index) => (
            <div
              key={`${selectedCategory}-${index}`}
              className="flex-none w-32 sm:w-36 md:w-48 lg:w-56 xl:w-64 animate-fade-in"
              style={{
                scrollSnapAlign: "center",
              }}
            >
              <SkillCard
                name={skill.name}
                icon={skill.icon}
                color={skill.color}
                rating={skill.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
