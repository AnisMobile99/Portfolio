import React from "react";

const InterestCard = ({ card }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-3/4 object-cover rounded-t-2xl"
      />
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white p-4">
        {card.title}
      </h3>
    </div>
  );
};

export default InterestCard;
