import React from 'react';
import './SpecialListCard.css';

const SpecialistCard = ({ specialty, image, onClick }) => {
  return (
    <div className="specialty-card" onClick={() => onClick(specialty)}>
      <div className="card-image">
        <img src={image} alt={specialty} />
      </div>
      <div className="card-content">
        <h3>{specialty}</h3>
      </div>
    </div>
  );
};

export default SpecialistCard;