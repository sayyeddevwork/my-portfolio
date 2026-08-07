import { useState } from "react";
import { Menu, X } from "lucide-react";

import "./NavBar.css";

import NavItem from "./NavItem";
import { navItems } from "./navItems";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar__container">
        <div className="navbar__brand">
          <div className="navbar__logo">H</div>

          <span className="navbar__title">Esub Vali Sayyed</span>
        </div>

        <nav className="navbar__desktop">
          <ul className="navbar__menu">
            {navItems.map((item) => (
              <NavItem key={item.id} item={item} />
            ))}
          </ul>
        </nav>

        <button
          className="navbar__toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="navbar__mobile">
          <ul>
            {navItems.map((item) => (
              <NavItem key={item.id} item={item} />
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
