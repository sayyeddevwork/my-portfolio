import { heroData } from "./heroData";

const HeroImage = () => {
  return (
    <div className="hero__image-wrapper">
      {/* =====================================================
          Background Glow
      ===================================================== */}

      <div className="hero__image-glow" />

      {/* =====================================================
          Decorative Ring
      ===================================================== */}

      <div className="hero__image-ring" />

      {/* =====================================================
          Experience Badge
      ===================================================== */}

      <div className="hero__badge hero__badge--experience">
        <span className="hero__badge-value">{heroData.experience.value}</span>

        <span className="hero__badge-label">{heroData.experience.label}</span>
      </div>

      {/* =====================================================
          Technology Badge
      ===================================================== */}

      <div className="hero__badge hero__badge--tech">
        <span className="hero__badge-tech">{heroData.technology.value}</span>

        <span className="hero__badge-subtitle">
          {heroData.technology.label}
        </span>
      </div>

      {/* =====================================================
          Availability Badge
      ===================================================== */}

      <div className="hero__badge hero__badge--availability">
        <span className="hero__status-dot" />

        <span className="hero__availability-text">{heroData.availability}</span>
      </div>

      {/* =====================================================
          Image Card
      ===================================================== */}

      <div className="hero__image-card">
        <img
          src={heroData.profileImage}
          alt={heroData.fullName}
          className="hero__image"
          loading="eager"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default HeroImage;
