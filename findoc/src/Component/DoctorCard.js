import React from "react";
import { Link } from "react-router-dom";
import "./DoctorCard.css";

const DoctorCard = ({ id, name, specialty, location, status, image }) => {
  return (
    <Link to={`/doctor/${id}`} className="doctor-card-link">
      <div className="doctor-card">
        <img src={image} alt={name} className="doctor-card-image" />
        <h2>{name}</h2>
        <p>Specialty: {specialty}</p>
        <p>Location: {location}</p>
        <p>Status: {status}</p>
      </div>
    </Link>
  );
};

export default DoctorCard;
