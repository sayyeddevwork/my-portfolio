import React from "react";
import { type NavItemType } from "./navItems";

interface NavItemProps {
  item: NavItemType;
}

const NavItem: React.FC<NavItemProps> = ({ item }) => {
  return (
    <li className="navbar__item">
      <a href={item.href} className="navbar__link">
        {item.label}
      </a>
    </li>
  );
};

export default NavItem;
