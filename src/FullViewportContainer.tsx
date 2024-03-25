import "./App.css";
import "./FullViewportContainer.css";
import ArrowIcon from "./arrow-icon";

const FullViewportContainer = () => {
  return (
    <div className="full-viewport-container">
      <div className="hero-content">
        <div className="copy">
          <h2 className="headline">
            At NOYERA, we unlock possibilities for the most ambitious brands in
            the world.
          </h2>
          <h2 className="headline">
            We are strategic and creative thinkers who set the course for what
            your brand should do, and not just could do.
          </h2>
          <ArrowIcon></ArrowIcon>
        </div>
      </div>
    </div>
  );
};

export default FullViewportContainer;
