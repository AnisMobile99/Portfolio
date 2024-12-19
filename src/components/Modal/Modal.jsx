import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose} // Fermer en cliquant en dehors
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-5xl w-full sm:w-3/4 max-h-screen transform animate-slide-up overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Empêche la propagation du clic
      >
        {/* Bouton de fermeture */}
        <div className="flex justify-end p-4 bg-gray-100 dark:bg-gray-700">
          <button
            onClick={onClose}
            className="text-gray-600 dark:text-white hover:text-gray-900"
          >
            ✖
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
