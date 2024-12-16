import React from "react";

const ProjectsHeader = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => onCategorySelect(category)}
          className={`px-4 py-2 rounded-lg text-sm font-semibold ${
            selectedCategory === category
              ? "bg-blue-500 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProjectsHeader;
