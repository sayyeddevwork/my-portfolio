import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";

import "./NavBar.css";

import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";
import { navItems } from "./navItems";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const [activeSection, setActiveSection] = useState("home");

  /* ===========================================================
     Navbar Shadow
  =========================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ===========================================================
     Active Section
  =========================================================== */

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.55,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  /* ===========================================================
     Lock Body Scroll
  =========================================================== */

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  /* ===========================================================
     Close Mobile Menu On Resize
  =========================================================== */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* ===========================================================
     Close Mobile Menu On Escape
  =========================================================== */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* ===========================================================
     Helpers
  =========================================================== */

  const toggleMenu = () => {
    setIsMenuOpen((previous) => !previous);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
        <div className="container navbar__container">
          {/* ==========================================
              Brand
          ========================================== */}

          <a href="#home" className="navbar__brand" onClick={closeMenu}>
            <div className="navbar__logo">S</div>

            <span className="navbar__title">Sayyed</span>
          </a>

          {/* ==========================================
              Actions
          ========================================== */}

          <div className="navbar__actions">
            {/* Desktop Navigation */}

            <nav className="navbar__desktop" aria-label="Primary Navigation">
              <ul className="navbar__menu">
                {navItems.map((item) => (
                  <NavItem
                    key={item.id}
                    item={item}
                    activeSection={activeSection}
                  />
                ))}
              </ul>
            </nav>

            {/* Resume */}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__resume"
            >
              <Download size={18} />

              <span>Resume</span>
            </a>

            {/* Mobile Toggle */}

            <button
              type="button"
              className="navbar__toggle"
              aria-label={isMenuOpen ? "Close Navigation" : "Open Navigation"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* ==========================================
          Mobile Navigation
      ========================================== */}

      <MobileMenu
        isOpen={isMenuOpen}
        activeSection={activeSection}
        onClose={closeMenu}
      />
    </>
  );
};

export default NavBar;
