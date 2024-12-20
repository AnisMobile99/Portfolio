import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import AvailableDepartments from "../Map/AvailableDepartments";

const ContactInfo = () => {
  return (
    <div className="bg-white dark:bg-[#1F1F1F] p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        Informations de contact
      </h3>
      <ul className="space-y-4">
        <li className="flex items-center space-x-4">
          <FaEnvelope className="text-blue-500 w-6 h-6" />
          <span className="text-gray-700 dark:text-gray-300">
            anis.salahbey@ynov.com
          </span>
        </li>
        <li className="flex items-center space-x-4">
          <FaPhoneAlt className="text-blue-500 w-6 h-6" />
          <span className="text-gray-700 dark:text-gray-300">
            +33 7 84 91 58 32
          </span>
        </li>
        <li className="flex items-center space-x-4">
          <FaMapMarkerAlt className="text-blue-500 w-6 h-6" />
          <span className="text-gray-700 dark:text-gray-300">France</span>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
