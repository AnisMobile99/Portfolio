const links = [
  { name: "À propos", href: "#about" },
  { name: "Compétences", href: "#skills" },
  { name: "Projets", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const MenuLinks = ({ onClick }) => (
  <ul className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0 text-gray-800 dark:text-gray-200 font-medium">
    {links.map((link) => (
      <li key={link.name}>
        <a href={link.href} onClick={onClick} className="hover:text-blue-500">
          {link.name}
        </a>
      </li>
    ))}
  </ul>
);

export default MenuLinks;
