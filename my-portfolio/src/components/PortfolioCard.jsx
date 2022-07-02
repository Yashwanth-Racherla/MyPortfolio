import React from "react";

const PortfolioCard = ({
  imageSrc,
  projectName,
  projectInfo,
  projectLink,
  id,
}) => {
  return (
    <div className={`portfolio-card portfolio-card--${id}`}>
      <img
        className="portfolio-card-image"
        src={imageSrc}
        alt="portfolio img"
      />
      <div className="portfolio-card-overlay ">
        <div className="portfolio-card-overlay-content">
          <h3 className="portfolio-card-overlay-title">{projectName}</h3>
          <span className=" portfolio-card-overlay-description">
            {projectInfo}
          </span>
          <a
            className="font-bold text-xl mt-4 underline"
            href={projectLink}
            target="blank"
          >
            {projectLink ? "Click here" : ""}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
