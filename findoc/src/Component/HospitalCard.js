import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const HospitalCard = ({ id, name, address, services }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/hospital/${id}`);
  };

  return (
    <div className="hospital-card" onClick={handleCardClick}>
      <h2>{name}</h2>
      <p>{address}</p>
      {services && services.length > 0 ? (
        <ul>
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      ) : (
        <p>No services listed.</p>
      )}
    </div>
  );
};

HospitalCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  services: PropTypes.arrayOf(PropTypes.string),
};

HospitalCard.defaultProps = {
  services: [],
};

export default HospitalCard;
