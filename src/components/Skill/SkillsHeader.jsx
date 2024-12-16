import React, { useEffect, useState, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

const SkillsHeader = ({ categories, selectedCategory, onSelectCategory }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const containerRef = useRef(null);

  // Détecter si les filtres débordent
  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current) {
        setIsOverflowing(
          containerRef.current.scrollWidth > containerRef.current.clientWidth
        );
      }
    };
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Affichage horizontal si l'espace le permet */}
      <div
        ref={containerRef}
        className={`${
          isOverflowing ? "hidden" : "flex"
        } flex-wrap justify-center gap-4 mb-4`}
      >
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => onSelectCategory(category.name)}
            className={`${
              selectedCategory === category.name
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-700 dark:text-white"
            } px-4 py-2 rounded-lg flex items-center`}
          >
            {category.icon}
            <span className="ml-2">{category.name}</span>
          </button>
        ))}
      </div>

      {/* Liste déroulante si les filtres débordent */}
      {isOverflowing && (
        <div className="relative w-full flex justify-center">
          <button
            onClick={() => setIsDropdownVisible(!isDropdownVisible)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
          >
            <span>Filter</span>
            <FaChevronDown className="ml-2" />
          </button>
          {isDropdownVisible && (
            <ul className="absolute top-full mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-50">
              {categories.map((category) => (
                <li key={category.name}>
                  <button
                    onClick={() => {
                      onSelectCategory(category.name);
                      setIsDropdownVisible(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {category.icon}
                    <span className="ml-2">{category.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default SkillsHeader;
