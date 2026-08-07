import { Download, Mail } from "lucide-react";

import { heroData } from "./heroData";

const HeroButtons = () => {
  const getIcon = (label: string) => {
    switch (label) {
      case "Hire Me":
        return <Mail size={18} />;

      case "Download Resume":
        return <Download size={18} />;

      default:
        return null;
    }
  };

  return (
    <div className="hero__buttons">
      {heroData.buttons.map((button) => (
        <a
          key={button.label}
          href={button.href}
          target={button.target}
          rel={button.target === "_blank" ? "noopener noreferrer" : undefined}
          className={`hero__button hero__button--${button.variant}`}
        >
          {getIcon(button.label)}

          <span>{button.label}</span>
        </a>
      ))}
    </div>
  );
};

export default HeroButtons;
