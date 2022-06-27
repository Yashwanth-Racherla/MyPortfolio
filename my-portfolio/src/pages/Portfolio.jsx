import React from "react";
import Button from "../components/Button";
import PortfolioCard from "../components/PortfolioCard";

const Portfolio = () => {
  return (
    <>
      <div className="section portfolio-section">
        <div className="container">
          <div>
            <h2 className="section-title">My Interests</h2>
            <p className="max-w-[700px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              dicta sequi asperiores maxime exercitationem odit nesciunt at
              nihil placeat, aperiam beatae possimus nostrum autem, non aut quo
              laborum nobis.
            </p>
          </div>
          <div className="flex justify-center gap-4 md:gap-6 lg:gap-8 my-10">
            <Button id="1" text="Sports" />
            <Button id="2" text="Games" />
            <Button id="3" text="Movies" />
          </div>

          <div className="flex justify-center flex-wrap gap-10 mt-14">
            <PortfolioCard
              id="1"
              imageSrc="./cricket.jpg"
              projectName="Project 1"
            />
            <PortfolioCard
              id="2"
              imageSrc="./maxPayne.jpg"
              projectName="Project 2"
            />
            <PortfolioCard
              id="3"
              imageSrc="./avengers.jpg"
              projectName="Project 3"
            />
            <PortfolioCard
              id="2"
              imageSrc="./uncharted.jpg"
              projectName="Project 4"
            />
            <PortfolioCard
              id="3"
              imageSrc="./wolverine.jpg"
              projectName="Project 5"
            />
            <PortfolioCard
              id="1"
              imageSrc="./football.jpg"
              projectName="Project 6"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
