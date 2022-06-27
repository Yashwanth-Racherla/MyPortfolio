import React from "react";
import { Link } from "react-router-dom";

const PortfolioCard = ({ imageSrc, projectName, id }) => {
  return (
    <div className={`portfolio-card portfolio-card--${id}`}>
      <Link to="/">
        <img
          className="portfolio-card-image"
          src={imageSrc}
          alt="portfolio img"
        />
        <span className="portfolio-card-overlay ">{projectName}</span>
      </Link>
    </div>
  );
};

export default PortfolioCard;
