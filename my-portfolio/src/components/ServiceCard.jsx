import React from "react";

const ServiceCard = ({ logoName, logoTitle }) => {
  return (
    <div className="service-card">
      <ion-icon class="icon services-icon" name={logoName}></ion-icon>
      <h3 className="pt-8 pb-2 font-bold">{logoTitle}</h3>
      <p>
        The greatest battles are always with the closest people. The greatest
        battles are always with the closest
      </p>
    </div>
  );
};

export default ServiceCard;
