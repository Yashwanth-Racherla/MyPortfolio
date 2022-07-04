import React, { useState } from "react";
import Button from "../components/Button";
import PortfolioCard from "../components/PortfolioCard";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const portfolioData = [
    {
      id: 1,
      imageSrc: "./cricket.jpg",
      projectName: "Cricket Website",
      projectInfo:
        "Being a cricket fan, I created a website which shows live cricket score updates.",
      projectLink: "https://cricketlive.netlify.app",
    },
    {
      id: 3,
      imageSrc: "./avengers.jpg",
      projectName: "Movie Website",
      projectInfo:
        "Being a Cinema lover, I created a website which shows all the movies and its details.",
      projectLink: "https://yashmovies.netlify.app",
    },
    {
      id: 2,
      imageSrc: "./maxPayne.jpg",
      projectName: "Coming Soon",
    },
    {
      id: 2,
      imageSrc: "./uncharted.jpg",
      projectName: "Coming Soon",
    },
    {
      id: 3,
      imageSrc: "./wolverine.jpg",
      projectName: "Coming Soon",
    },
    {
      id: 1,
      imageSrc: "./football.jpg",
      projectName: "Coming Soon",
    },
  ];

  return (
    <>
      <div className="section portfolio-section">
        <div className="container">
          <div>
            <h2 className="section-title">My Personal Projects</h2>
          </div>
          <div className="flex justify-center gap-4 md:gap-6 lg:gap-8 my-10">
            <Button
              id="1"
              text="Sports"
              className={`portfolio-button ${activeCategory === 1 && "active"}`}
              onButtonClick={() => setActiveCategory(1)}
            />
            <Button
              id="2"
              text="Games"
              className={`portfolio-button ${activeCategory === 2 && "active"}`}
              onButtonClick={() => setActiveCategory(2)}
            />
            <Button
              id="3"
              text="Movies"
              className={`portfolio-button ${activeCategory === 3 && "active"}`}
              onButtonClick={() => setActiveCategory(3)}
            />
          </div>
          <div className="flex justify-center flex-wrap gap-10 mt-14">
            {portfolioData.map((portfolioCard, index) => {
              return (
                (activeCategory === portfolioCard.id ||
                  activeCategory === 0) && (
                  <PortfolioCard
                    key={index}
                    id={portfolioCard.id}
                    imageSrc={portfolioCard.imageSrc}
                    projectName={portfolioCard.projectName}
                    projectInfo={portfolioCard.projectInfo}
                    projectLink={portfolioCard.projectLink}
                  />
                )
              );
            })}
          </div>
          {activeCategory !== 0 && (
            <Button
              className="mt-8 block mx-auto"
              onButtonClick={() => setActiveCategory(0)}
              text="Show All Projects"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
