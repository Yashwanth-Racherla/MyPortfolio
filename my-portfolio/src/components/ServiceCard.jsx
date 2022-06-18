import React from "react";

const ServiceCard = ({ logo, logoName, logoContent }) => {
  return (
    <div className="service-card">
      <ion-icon class="icon services-icon" name={logo}></ion-icon>
      <h3 className="pt-8 pb-2 font-bold">{logoName}</h3>
      <p>{logoContent}</p>
    </div>
  );
};

export default ServiceCard;
