import React from 'react';
import './style.scss';

const Card = function Card({ day, hour, millimeters }) {
  function checkRainSeverity() {
    if (millimeters < 0.2) return 'Sem Chuva';
    if (millimeters >= 0.2 && millimeters <= 5.0) return 'Chuva Fraca';
    if (millimeters >= 5.1 && millimeters <= 25.0) return 'Chuva Moderada';
    return 'Chuva Forte';
  }

  const severityClass = {
    'Chuva Forte': 'strong-rain',
    'Chuva Moderada': 'moderate-rain',
    'Chuva Fraca': 'week-rain',
    'Sem Chuva': 'without-rain',
  };

  return (
    <div className="card-container">
      <p>
        {day}
        {' '}
        -
        {hour}
      </p>
      <span className={severityClass[checkRainSeverity()]}>
        {checkRainSeverity()}
      </span>
    </div>
  );
};

export default Card;
