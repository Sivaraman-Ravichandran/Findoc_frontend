import React from "react";
import PropTypes from "prop-types";
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

DoctorCard.propTypes = {
  name: PropTypes.string.isRequired,
  specialty: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default DoctorCard;
