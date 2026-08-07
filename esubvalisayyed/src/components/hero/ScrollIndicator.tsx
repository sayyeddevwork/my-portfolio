import { ArrowDown } from "lucide-react";

const ScrollIndicator = () => {
  return (
    <div className="scroll-indicator">
      <span className="scroll-indicator__text">Scroll Down</span>

      <ArrowDown size={22} className="scroll-indicator__icon" />
    </div>
  );
};

export default ScrollIndicator;
