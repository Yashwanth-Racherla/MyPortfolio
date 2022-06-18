import React from "react";

const PortfolioCard = ({ imageSrc, projectName }) => {
  return (
    <div className="portfolio-card">
      <img className="portfolio-image" src={imageSrc} alt="laptop-img" />
      <span className="portfolio-project ">{projectName}</span>
    </div>
  );
};

export default PortfolioCard;
