import { useEffect, useState } from "react";
import "../Style/arrow-icon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ArrowIcon = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const arrowElement = document.getElementById("arrow-icon");

      if (arrowElement) {
        const arrowPosition = arrowElement.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (arrowPosition < screenHeight && arrowPosition > 0) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="arrow-icon" className={`arrow-icon ${isInView ? "animated" : ""}`}>
      <FontAwesomeIcon icon={faArrowRight} />
    </div>
  );
};

export default ArrowIcon;
