import React from "react";
import { FaTimes, FaCode, FaExternalLinkAlt } from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm px-4 sm:px-6 md:px-8 py-4"
      onClick={onClose}
    >
      {/* Conteneur du Modal */}
      <div
        className="relative bg-white dark:bg-[#1F1F1F] rounded-lg shadow-lg w-full max-w-3xl mx-auto p-4 sm:p-6 md:p-8"
        onClick={(e) => e.stopPropagation()} // Empêche la fermeture en cliquant à l'intérieur
      >
        {/* Bouton de fermeture */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 transition-all"
          onClick={onClose}
        >
          <FaTimes className="w-6 h-6" />
        </button>

        {/* Image */}
        <div className="mb-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 sm:h-64 object-cover rounded-md"
          />
        </div>

        {/* Titre */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-3">
          {project.description}
        </p>

        {/* Liens */}
        <div className="flex space-x-6">
          <a
            href={project.link}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt />
            <span>Démo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
