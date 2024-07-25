import React from "react";
import "./HospitalCard.css";

const HospitalCard = ({ name, address, services }) => {
  return (
    <div className="hospital-card">
      <h2>{name}</h2>
      <p>{address}</p>
      <h3>Services:</h3>
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  );
};

export default HospitalCard;
