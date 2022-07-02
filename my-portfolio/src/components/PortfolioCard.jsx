import React from "react";
import { Link } from "react-router-dom";

const PortfolioCard = ({
  imageSrc,
  projectName,
  projectInfo,
  id,
  Redirect,
}) => {
  return (
    <div className={`portfolio-card portfolio-card--${id}`}>
      {/* <Link to="/"> */}
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
          <Link className="font-bold text-xl mt-4 underline" to="/">
            {Redirect}
          </Link>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default PortfolioCard;
