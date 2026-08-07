import "./Background.css";

const Background = () => {
  return (
    <div className="background">
      {/* Animated Gradient */}
      <div className="background__gradient" />

      {/* Aurora Lights */}
      <div className="background__aurora">
        <span className="aurora aurora--one" />
        <span className="aurora aurora--two" />
        <span className="aurora aurora--three" />
      </div>

      {/* Grid */}
      <div className="background__grid" />

      {/* React Three Fiber Canvas */}
      <div id="background-canvas" />

      {/* Mouse Glow */}
      <div id="mouse-glow" />

      {/* Noise Overlay */}
      <div className="background__noise" />
    </div>
  );
};

export default Background;
