export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  {
    id: "home",
    label: "Home",
    href: "#home",
  },
  {
    id: "about",
    label: "About",
    href: "#about",
  },
  {
    id: "skills",
    label: "Skills",
    href: "#skills",
  },
  {
    id: "projects",
    label: "Projects",
    href: "#projects",
  },
  {
    id: "experience",
    label: "Experience",
    href: "#experience",
  },
  {
    id: "education",
    label: "Education",
    href: "#education",
  },
  {
    id: "contact",
    label: "Contact",
    href: "#contact",
  },
];
