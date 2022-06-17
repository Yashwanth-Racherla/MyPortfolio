import React from "react";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <div className="section services-section">
      <div className="container">
        <div>
          <h2 className="section-title"> Service Offers </h2>
          <p className="max-w-[700px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur velit, doloribus placeat inventore voluptatem nulla,
            quaerat eligendi ad ratione vel laborum, optio nemo sit numquam
            vitae enim obcaecati quos laudantium.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14 ">
          <ServiceCard logoName="logo-react" logoTitle="React" />
          <ServiceCard logoName="logo-javascript" logoTitle="JavaScript" />
          <ServiceCard logoName="logo-html5" logoTitle="HTML5" />
          <ServiceCard logoName="logo-css3" logoTitle="CSS3" />
          <ServiceCard logoName="game-controller-outline" logoTitle="Games" />
          <ServiceCard logoName="videocam-outline" logoTitle="Movies" />
        </div>
      </div>
    </div>
  );
};

export default Services;
