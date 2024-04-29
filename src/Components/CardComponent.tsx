import React from "react";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import "../Style/Cards.css";

interface CardProps {
  icon: IconName;
  title: string;
  subtitle: string;
}

const Card: React.FC<CardProps> = ({ icon, title, subtitle }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-image">
          <i className={`fa-duotone ${icon}`}></i>
        </div>
        <div className="card-info-wrapper">
          <div className="card-info">
            <i className={`fa-duotone ${icon}`}></i>
            <div className="card-info-title">
              <h3>{title}</h3>
              <h4>{subtitle}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
