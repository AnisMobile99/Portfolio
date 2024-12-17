import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectsHeader = ({
  categories,
  selectedCategory,
  onCategorySelect,
  nextCategory,
  prevCategory,
}) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-8 relative">
      {/* Flèche gauche */}
      <button
        onClick={prevCategory}
        className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 shadow-lg transition-all"
      >
        <FaChevronLeft className="w-4 h-4" />
      </button>

      {/* Boutons de catégorie */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => onCategorySelect(category)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              selectedCategory === category
                ? "bg-blue-500 text-white shadow-md"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-blue-300 dark:hover:bg-blue-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Flèche droite */}
      <button
        onClick={nextCategory}
        className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 shadow-lg transition-all"
      >
        <FaChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ProjectsHeader;
