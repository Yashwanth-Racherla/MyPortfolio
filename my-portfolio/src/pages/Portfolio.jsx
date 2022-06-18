import React from "react";
import PortfolioCard from "../components/PortfolioCard";

const Portfolio = () => {
  return (
    <div className="section portfolio-section">
      <div className="container">
        <div>
          <h2 className="section-title">My Latest Works</h2>
          <p className="max-w-[700px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dicta
            sequi asperiores maxime exercitationem odit nesciunt at nihil
            placeat, aperiam beatae possimus nostrum autem, non aut quo laborum
            nobis. Illo.
          </p>
        </div>
        <div className="flex justify-center gap-4 md:gap-6 lg:gap-8 my-10">
          <button className="button">GAMES</button>
          <button className="button">SPORTS</button>
          <button className="button">MOVIES</button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
          <PortfolioCard imageSrc="./cricket.jpg" projectName={"Project 1"} />
          <PortfolioCard imageSrc="./uncharted.jpg" projectName={"Project 2"} />
          <PortfolioCard imageSrc="./movies.jpg" projectName={"Project 3"} />
          <PortfolioCard imageSrc="./uncharted.jpg" projectName={"Project 4"} />
          <PortfolioCard imageSrc="./movies.jpg" projectName={"Project 5"} />
          <PortfolioCard imageSrc="./cricket.jpg" projectName={"Project 6"} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
