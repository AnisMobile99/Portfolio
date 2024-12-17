import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const SkillCard = ({ name, icon, color, rating }) => {
  // Fonction pour afficher les étoiles
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
      <>
        {Array(fullStars)
          .fill()
          .map((_, i) => (
            <FaStar key={`full-${i}`} className="text-yellow-400" />
          ))}
        {halfStar === 1 && <FaStarHalfAlt className="text-yellow-400" />}
        {Array(emptyStars)
          .fill()
          .map((_, i) => (
            <FaRegStar key={`empty-${i}`} className="text-gray-300" />
          ))}
      </>
    );
  };

  return (
    <div
      className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md 
                 bg-white dark:bg-[#1F1F1F] text-gray-800 dark:text-gray-300 hover:shadow-lg transition-all"
    >
      <div className={`text-4xl ${color} mb-2`}>{icon}</div>
      <p className="text-center font-medium mb-2">{name}</p>
      {/* Ratings */}
      <div className="flex justify-center gap-1">{renderStars(rating)}</div>
    </div>
  );
};

export default SkillCard;
