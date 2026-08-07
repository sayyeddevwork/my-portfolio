import NavItem from "./NavItem";
import { navItems } from "./navItems";

interface MobileMenuProps {
  isOpen: boolean;
  activeSection: string;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, activeSection, onClose }: MobileMenuProps) => {
  return (
    <nav className={`mobile-menu ${isOpen ? "mobile-menu--open" : ""}`}>
      <ul className="mobile-menu__list">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            item={item}
            activeSection={activeSection}
            onClick={onClose}
          />
        ))}

        <li className="mobile-menu__resume">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-menu__resume-button"
            onClick={onClose}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
