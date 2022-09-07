import React from "react";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const biodataSection = document.querySelector(".biodata-section");
    const bioProgressObserver = new IntersectionObserver(
      (entries, observer) => {
        const [entry] = entries;

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
            <ul className="max-w-[700px] list-outside list-disc ml-4 text-[#777777]">
              <li className="mb-4">
                Experience in developing web pages using HTML/HTML5, CSS/CSS3,
                JavaScript (ES5 and ES6+), React JS, JQuery, JSON, Ajax,
                Tailwind, Bootstrap.
              </li>
              <li className="mb-4">
                Having 2+ years of experience in developing web applications
                using React and knowledge on Next JS.
              </li>
              <li className="mb-4">
                Experience in Class and Functional components, React Hooks,
                Redux and Good understanding of design system development using
                React (Storybook).
              </li>
            </ul>
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
              <a href="/yash-resume.pdf" target="_blank">
                Download Resume
              </a>
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
