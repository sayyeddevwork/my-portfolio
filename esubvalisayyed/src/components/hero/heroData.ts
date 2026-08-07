export interface HeroButton {
  label: string;
  href: string;
  variant: "primary" | "secondary";
  target?: "_blank" | "_self";
}

export interface HeroBadge {
  value: string;
  label: string;
}

export interface HeroSocialLink {
  platform: string;
  url: string;
}

export interface HeroData {
  greeting: string;

  firstName: string;

  lastName: string;

  fullName: string;

  designation: string;

  description: string;

  profileImage: string;

  experience: HeroBadge;

  technology: HeroBadge;

  availability: string;

  buttons: HeroButton[];

  socialLinks: HeroSocialLink[];
}

export const heroData: HeroData = {
  greeting: "Hello 👋",

  firstName: "Sayyed",

  lastName: "Esub Vali",

  fullName: "Sayyed Esub Vali",

  designation: "Senior Full Stack Engineer",

  description:
    "I design and build scalable, cloud-native web applications using React, Node.js, TypeScript, microservices, Kubernetes, Azure, AWS, and modern software architecture. I enjoy solving complex engineering problems and delivering high-quality user experiences.",

  profileImage: "/images/profile.png",

  experience: {
    value: "9+",
    label: "Years Experience",
  },

  technology: {
    value: "MERN",
    label: "Full Stack",
  },

  availability: "Available for Work",

  buttons: [
    {
      label: "Hire Me",
      href: "#contact",
      variant: "primary",
      target: "_self",
    },
    {
      label: "Download Resume",
      href: "/resume.pdf",
      variant: "secondary",
      target: "_blank",
    },
  ],

  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/sayyeddevwork",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/esub-vali-sayyed-516759100/",
    },
  ],
};
