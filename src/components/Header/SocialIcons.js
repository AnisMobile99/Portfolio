import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFreeCodeCamp,
  FaCodepen,
  FaCode,
} from "react-icons/fa";
import { FaCodeBranch, FaCodeMerge, FaFileCode } from "react-icons/fa6";

const SocialIcons = () => (
  <div className="flex items-center space-x-4">
    <a
      href="https://github.com/AnisMobile99"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 dark:text-gray-400 hover:text-gray-900"
    >
      <FaGithub className="w-6 h-6" />
    </a>
    <a
      href="https://www.linkedin.com/in/salah-bey-anis-624914198/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 dark:text-gray-400 hover:text-gray-900"
    >
      <FaLinkedin className="w-6 h-6" />
    </a>
    <a
      href="https://www.malt.fr/profile/anissalahbey"
      target="_blank"
      className="text-gray-600 dark:text-gray-400 hover:text-gray-900"
    >
      <FaCode className="w-6 h-6" />
    </a>
  </div>
);

export default SocialIcons;
