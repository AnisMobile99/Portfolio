import React from "react";
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
import TypingEffect from "./TypingEffect";
import AvailableDepartments from "../Map/AvailableDepartments";

const TitleAndInfo = () => {
  return (
    <div className="flex flex-col items-start space-y-4">
      {/* Développeur Full-Stack avec TypingEffect */}
      <p className="flex items-center space-x-2">
        <FaBriefcase className="text-blue-500 dark:text-white w-5 h-5" />
        <span>
          Développeur Full-Stack{" "}
          <TypingEffect text="JS | PHP | IA" speed={100} />
        </span>
      </p>

      {/* Localisation */}
      <AvailableDepartments />

      {/* Expérience */}
      <p className="flex items-center space-x-2">
        <FaBriefcase className="text-blue-500 dark:text-white w-5 h-5" />
        <span>+3 ans XP</span>
      </p>

      {/* Diplôme */}
      <p className="flex items-center space-x-2">
        <FaGraduationCap className="text-blue-500 dark:text-white w-5 h-5" />
        <span>BAC +5 en Expert en développement Mobile/Web/Logiciel & IOT</span>
      </p>
    </div>
  );
};

export default TitleAndInfo;
