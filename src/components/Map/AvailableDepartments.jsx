import React, { useState } from "react";
import FranceMap from "./FranceMap";
import { FaMapMarkerAlt } from "react-icons/fa";
import Modal from "../Modal/Modal";

const AvailableDepartments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Liste des départements disponibles
  const availableDepartments = ["13", "75", "69", "06"];

  return (
    <div>
      <p
        className="flex items-center space-x-2 cursor-pointer text-blue-500 underline animate-blink hover:scale-105 transition-transform"
        onClick={() => setIsModalOpen(true)}
      >
        <FaMapMarkerAlt className="text-blue-500 dark:text-white w-5 h-5" />
        <span>Flexible en France</span>
      </p>

      {/* Modal pour afficher la carte agrandie */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <FranceMap availableDepartments={availableDepartments} />
      </Modal>
    </div>
  );
};

export default AvailableDepartments;
