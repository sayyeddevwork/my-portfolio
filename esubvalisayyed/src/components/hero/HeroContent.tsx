import HeroButtons from "./HeroButtons";
import { heroData } from "./heroData";

const HeroContent = () => {
  return (
    <div className="hero__content">
      {/* Greeting */}

      <span className="hero__greeting">{heroData.greeting}</span>

      {/* Heading */}

      <h1 className="hero__heading">
        I'm{" "}
        <span className="hero__heading-highlight">{heroData.firstName}</span>
        <br />
        <span className="hero__heading-lastname">{heroData.lastName}</span>
      </h1>

      {/* Designation */}

      <h2 className="hero__designation">{heroData.designation}</h2>

      {/* Description */}

      <p className="hero__description">{heroData.description}</p>

      {/* Buttons */}

      <HeroButtons />
    </div>
  );
};

export default HeroContent;
