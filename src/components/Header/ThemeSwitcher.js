import { useContext } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeSwitcher = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="text-blue-500 dark:text-yellow-400 focus:outline-none"
    >
      {isDarkMode ? (
        <SunIcon className="w-6 h-6" />
      ) : (
        <MoonIcon className="w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
