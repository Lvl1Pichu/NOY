import { useEffect, useState } from "react";
import "./Arrow-icon.css";

const ArrowIcon = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Determine the scroll position here and set isInView accordingly
      const arrowPosition = document
        .getElementById("arrow-icon")
        .getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
      if (arrowPosition < screenHeight && arrowPosition > 0) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="arrow-icon" className={`arrow-icon ${isInView ? "animated" : ""}`}>
      <h2>PIL</h2>
    </div>
  );
};

export default ArrowIcon;
