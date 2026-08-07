import "./Hero.css";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import ScrollIndicator from "./ScrollIndicator";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero__container">
        {/* ===========================
            Left Side
        =========================== */}

        <HeroContent />

        {/* ===========================
            Right Side
        =========================== */}

        <HeroImage />
      </div>

      {/* ===========================
          Scroll Indicator
      =========================== */}

      <ScrollIndicator />
    </section>
  );
};

export default Hero;
