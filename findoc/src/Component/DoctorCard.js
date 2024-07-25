import React from "react";
import "./DoctorCard.css";

const DoctorCard = ({ name, specialty, location }) => {
  return (
    <div className="doctor-card">
      <h2>{name}</h2>
      <p>Specialty: {specialty}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default DoctorCard;
