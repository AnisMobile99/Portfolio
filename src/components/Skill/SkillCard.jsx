import React from "react";

const SkillCard = ({ name, icon, color }) => {
  return (
    <div
      className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md 
                    bg-white dark:bg-[#1F1F1F] text-gray-800 dark:text-gray-300  hover:shadow-[0px_10px_25px_rgba(0,0,0,0.4)]  dark:hover:shadow-[0px_10px_25px_rgba(255,255,255,0.4)] 
                     transition-all duration-300"
    >
      <div className={`text-4xl ${color} mb-2`}>{icon}</div>
      <p className="text-center font-medium">{name}</p>
    </div>
  );
};

export default SkillCard;
