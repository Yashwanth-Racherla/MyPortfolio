import React from "react";
import Button from "../components/Button";
import PortfolioCard from "../components/PortfolioCard";

const Portfolio = () => {
  return (
    <>
      <div className="section portfolio-section">
        <div className="container">
          <div>
            <h2 className="section-title">My Personal Projects</h2>
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
              projectName="My Cricket Website"
              projectInfo="Being a cricket fan, I created a website which shows live cricket score updates."
              navigateTo="https://cricbuzz.com"
              Redirect="Click Here"
            />
            <PortfolioCard
              id="2"
              imageSrc="./maxPayne.jpg"
              projectName="Coming Soon"
            />
            <PortfolioCard
              id="3"
              imageSrc="./avengers.jpg"
              projectName="Coming Soon"
            />
            <PortfolioCard
              id="2"
              imageSrc="./uncharted.jpg"
              projectName="Coming Soon"
            />
            <PortfolioCard
              id="3"
              imageSrc="./wolverine.jpg"
              projectName="Coming Soon"
            />
            <PortfolioCard
              id="1"
              imageSrc="./football.jpg"
              projectName="Coming Soon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
