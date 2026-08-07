export interface NavItemType {
  id: string;
  label: string;
  href: string;
}

export const navItems: NavItemType[] = [
  {
    id: "projects",
    label: "Projects",
    href: "#projects",
  },
  {
    id: "about",
    label: "About",
    href: "#about",
  },
  {
    id: "tech",
    label: "Tech",
    href: "#tech",
  },
  {
    id: "services",
    label: "Services",
    href: "#services",
  },
  {
    id: "education",
    label: "Education",
    href: "#education",
  },
  {
    id: "testimonials",
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    id: "contact",
    label: "Get In Touch",
    href: "#contact",
  },
];
