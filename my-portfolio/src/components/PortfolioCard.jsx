import React from "react";

const PortfolioCard = ({ imageSrc, projectName, id }) => {
  return (
    <div className={`portfolio-card portfolio-card--${id}`}>
      <img className="portfolio-card-image" src={imageSrc} alt="laptop-img" />
      <span className="portfolio-card-overlay ">{projectName}</span>
    </div>
  );
};

export default PortfolioCard;
