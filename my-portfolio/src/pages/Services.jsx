import React from "react";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <div className="section services-section">
      <div className="container">
        <div>
          <h2 className="section-title"> Services </h2>
          <p className="max-w-[700px] text-xl">
            Give me the design and I will build you a website using below tools.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14 ">
          <ServiceCard
            logo="logo-react"
            logoName="React"
            logoContent="Can develop the latest user-facing features using React.js and built reusable components for future use."
          />
          <ServiceCard
            logo="logo-javascript"
            logoName="JavaScript"
            logoContent="Convert photoshop design files to interactive web pages using HTML, CSS and JavaScript."
          />
          <ServiceCard
            logo="logo-html5"
            logoName="HTML5"
            logoContent="Experience in developing accessible websites as per WCAG 2.1 guidelines and SEO
            "
          />
          <ServiceCard
            logo="logo-css3"
            logoName="CSS3"
            logoContent="Created Responsive layouts (Mobile/Tablet/Desktop) using CSS"
          />
          <ServiceCard
            logo="laptop-outline"
            logoName="Tailwind"
            logoContent="Good knowledge of tailwind classes and configuring custom classes as per the requirement "
          />
          <ServiceCard
            logo="apps-outline"
            logoName="Bootstrap"
            logoContent="Good knowledge of Bootstrap and can use it as per the requirement"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
