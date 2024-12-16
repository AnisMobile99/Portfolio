import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex justify-center space-x-8 mt-4">
      <a
        href="#"
        className="text-blue-500 dark:text-white hover:text-blue-700 dark:hover:text-gray-300"
      >
        <FaFacebook className="w-6 h-6" />
      </a>
      <a
        href="#"
        className="text-blue-500 dark:text-white hover:text-blue-700 dark:hover:text-gray-300"
      >
        <FaTwitter className="w-6 h-6" />
      </a>
      <a
        href="#"
        className="text-blue-500 dark:text-white hover:text-blue-700 dark:hover:text-gray-300"
      >
        <FaLinkedin className="w-6 h-6" />
      </a>
      <a
        href="mailto:anis.salahbey@ynov.com"
        className="text-blue-500 dark:text-white hover:text-blue-700 dark:hover:text-gray-300"
      >
        <FaEnvelope className="w-6 h-6" />
      </a>
    </div>
  );
};

export default SocialIcons;
