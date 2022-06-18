import React from "react";

const PortfolioCard = ({ imageSrc }) => {
  return (
    <div>
      <img className="portfolio-card" src={imageSrc} alt="laptop-img" />
    </div>
  );
};

export default PortfolioCard;
