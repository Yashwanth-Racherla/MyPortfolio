import React from "react";
import Button from "../components/Button";
import PortfolioCard from "../components/PortfolioCard";

const Portfolio = () => {
  return (
    <>
      <div className="section portfolio-section">
        <div className="container">
          <div>
            <h2 className="section-title">My Latest Works</h2>
            <p className="max-w-[700px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              dicta sequi asperiores maxime exercitationem odit nesciunt at
              nihil placeat, aperiam beatae possimus nostrum autem, non aut quo
              laborum nobis. Illo.
            </p>
          </div>
          <div className="flex justify-center gap-4 md:gap-6 lg:gap-8 my-10">
            <Button id="1" text="Sports" />
            <Button id="2" text="Games" />
            <Button id="3" text="Movies" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
            <PortfolioCard
              id="1"
              imageSrc="./cricket.jpg"
              projectName="Project 1"
            />
            <PortfolioCard
              id="2"
              imageSrc="./uncharted.jpg"
              projectName="Project 2"
            />
            <PortfolioCard
              id="3"
              imageSrc="./movies.jpg"
              projectName="Project 3"
            />
            <PortfolioCard
              id="2"
              imageSrc="./uncharted.jpg"
              projectName="Project 4"
            />
            <PortfolioCard
              id="3"
              imageSrc="./movies.jpg"
              projectName="Project 5"
            />
            <PortfolioCard
              id="1"
              imageSrc="./cricket.jpg"
              projectName="Project 6"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
