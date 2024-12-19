import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full h-full max-w-6xl max-h-screen flex flex-col overflow-hidden">
        {/* Bouton de fermeture */}
        <div className="flex justify-end p-4 bg-gray-100 dark:bg-gray-700">
          <button
            onClick={onClose}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900"
          >
            ✖
          </button>
        </div>
        {/* Contenu dynamique qui occupe tout l'espace */}
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
