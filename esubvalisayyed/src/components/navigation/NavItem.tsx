import type { NavItem as NavItemType } from "./navItems";

interface NavItemProps {
  item: NavItemType;
  activeSection: string;
  onClick?: () => void;
}

const NavItem = ({ item, activeSection, onClick }: NavItemProps) => {
  return (
    <li className="navbar__item">
      <a
        href={item.href}
        className={`navbar__link ${
          activeSection === item.id ? "navbar__link--active" : ""
        }`}
        onClick={onClick}
      >
        {item.label}
      </a>
    </li>
  );
};

export default NavItem;
