import React from "react";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const biodataSection = document.querySelector(".biodata-section");
    const bioProgressObserver = new IntersectionObserver(
      (entries, observer) => {
        const [entry] = entries;
        console.log(entry);

        if (!entry.isIntersecting) return;

        const progressBars = document.querySelectorAll(".biodata-progress-bar");

        const skillBars = document.querySelectorAll(".biodata-skill-bar");

        progressBars.forEach((currElem) => {
          currElem.classList.add("active");
        });
        skillBars.forEach((currElem) => {
          currElem.classList.add("active");
        });
      },
      {
        root: null,
        threshold: 0.4,
      }
    );

    bioProgressObserver.observe(biodataSection);
  }, []);

  return (
    <div className="section biodata-section">
      <div className="container flex-box flex-row-reverse">
        <div className="md:w-1/2">
          <div className="mb-10">
            <h2 className="section-title">My Bio-Data</h2>
            <p className="max-w-[700px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              autem iure temporibus nihil adipisci eius tempora perferendis aut
              consequuntur doloremque fugiat repudiandae magnam saepe cum, quos
              sapiente quibusdam a enim! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Sed, fuga? Vel aliquam aliquid accusantium
              voluptatum libero quisquam eum repellendus quod quo dignissimos,
              laborum necessitatibus ut, repellat eveniet quibusdam, reiciendis
              molestias?
            </p>
          </div>
          <div className="mb-16">
            <div className="biodata-stats">
              <h3 className="biodata-progress-bar">HTML</h3>
              <span className="biodata-skill-bar">95%</span>
            </div>
            <div className="biodata-stats">
              <h3 className="biodata-progress-bar biodata-progress-bar-2">
                CSS
              </h3>
              <span className="biodata-skill-bar biodata-skill-bar-2">90%</span>
            </div>
            <div className="biodata-stats">
              <h3 className="biodata-progress-bar biodata-progress-bar-3">
                JavaScript
              </h3>
              <span className="biodata-skill-bar biodata-skill-bar-3">80%</span>
            </div>
            <div className="biodata-stats">
              <h3 className="biodata-progress-bar biodata-progress-bar-4">
                React
              </h3>
              <span className="biodata-skill-bar biodata-skill-bar-4">70%</span>
            </div>
            <div className="biodata-stats">
              <h3 className="biodata-progress-bar biodata-progress-bar-5">
                JQuery
              </h3>
              <span className="biodata-skill-bar biodata-skill-bar-5">85%</span>
            </div>
          </div>
          <div>
            <button className="button">
              <a href="/About">Download Resume</a>
            </button>
          </div>
        </div>

        <div className="pt-10 md:w-1/2">
          <img
            className="biodata-image"
            src="./about-page-image.jpg"
            alt="biodata-img"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
