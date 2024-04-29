import React from "react";
import "../Style/GridContainer.css";

interface GridComponentProps {
  companies: { imgSrc: string; alt: string }[];
}

const GridComponent: React.FC<GridComponentProps> = ({ companies }) => {
  return (
    <div className="grid-container">
      {companies.map((company, index) => (
        <div key={index} className="grid-item">
          <img src={company.imgSrc} alt={company.alt} />
        </div>
      ))}
    </div>
  );
};

export default GridComponent;
