import React from 'react';
import './style.scss';

const Card = function Card({ date, rain }) {
  const [hour, severity] = [rain[0], rain[1]];
  const severityClass = {
    'Chuva Forte': 'strong-rain',
    'Chuva Moderada': 'moderate-rain',
    'Chuva Fraca': 'week-rain',
    'Sem Chuva': 'without-rain',
  };

  return (
    <div className="card-container">
      <p>
        {date}
        {' '}
        -
        {hour}
      </p>
      <span className={severityClass[severity]}>{severity}</span>
    </div>
  );
};

export default Card;
