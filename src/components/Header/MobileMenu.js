import MenuLinks from "./MenuLinks";
import SocialIcons from "./SocialIcons";

const MobileMenu = ({ isOpen, onClose }) =>
  isOpen && (
    <nav className="md:hidden bg-white dark:bg-[#121212] shadow-md">
      <div className="flex flex-col items-center justify-center space-y-6 py-6">
        <MenuLinks onClick={onClose} />
        <SocialIcons />
      </div>
    </nav>
  );

export default MobileMenu;
