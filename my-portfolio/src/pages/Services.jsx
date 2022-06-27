import React from "react";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <div className="section services-section">
      <div className="container">
        <div>
          <h2 className="section-title"> Services </h2>
          <p className="max-w-[700px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur velit, doloribus placeat inventore voluptatem nulla,
            quaerat eligendi ad ratione vel laborum, optio nemo sit numquam
            vitae enim obcaecati quos laudantium.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14 ">
          <ServiceCard
            logo="logo-react"
            logoName="React"
            logoContent=" Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur velit"
          />
          <ServiceCard
            logo="logo-javascript"
            logoName="JavaScript"
            logoContent=" Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur velit"
          />
          <ServiceCard
            logo="logo-html5"
            logoName="HTML5"
            logoContent=" Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur velit"
          />
          <ServiceCard
            logo="logo-css3"
            logoName="CSS3"
            logoContent=" Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur velit"
          />
          <ServiceCard
            logo="game-controller-outline"
            logoName="Games"
            logoContent=" Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur velit"
          />
          <ServiceCard
            logo="videocam-outline"
            logoName="Movies"
            logoContent=" Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur velit"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
