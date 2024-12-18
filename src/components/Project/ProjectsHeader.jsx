import React from "react";

const ProjectsHeader = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-8">
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
    </div>
  );
};

export default ProjectsHeader;
