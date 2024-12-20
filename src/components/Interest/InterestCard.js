// InterestCard.js
import React from "react";

const InterestCard = ({ card, isHovered }) => {
  return (
    <div
      className="w-full h-full flex flex-col transition-transform duration-700"
      style={{ userSelect: "none" }}
    >
      {/* Image */}
      <div className="w-full h-[70%] overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover rounded-t-2xl"
        />
      </div>

      {/* Description */}
      <div className="w-full h-[30%] bg-white dark:bg-gray-800 p-4 rounded-b-2xl">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
          {card.title}
        </h3>
        <p
          className={`text-sm text-gray-600 dark:text-gray-300 transition-all duration-700 ${
            isHovered ? "line-clamp-none" : "line-clamp-2"
          }`}
        >
          {card.description}
        </p>
      </div>
    </div>
  );
};

export default InterestCard;
