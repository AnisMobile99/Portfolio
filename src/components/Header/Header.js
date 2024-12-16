import React, { useState } from "react";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import SocialIcons from "./SocialIcons";
import ThemeSwitcher from "./ThemeSwitcher";
import MobileMenu from "./MobileMenu";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-white dark:bg-[#121212] shadow-md py-4 mb-8 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Logo />

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <MenuLinks />
          <SocialIcons />
          <ThemeSwitcher />
        </nav>

        {/* Menu Mobile */}
        <div className="md:hidden flex items-center">
          <ThemeSwitcher />
          <button
            onClick={toggleMenu}
            className="text-gray-800 dark:text-white"
          >
            {isMobileMenuOpen ? (
              <XIcon className="h-8 w-8" />
            ) : (
              <MenuIcon className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMenu} />
      )}
    </header>
  );
};

export default Header;
