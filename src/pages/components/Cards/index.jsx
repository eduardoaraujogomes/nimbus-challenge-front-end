/* eslint-disable react/no-array-index-key */
import React from 'react';
import Card from './Card';
import './style.scss';

const Cards = function Cards() {
  const rain = [
    ['13h', 'Chuva Forte'],
    ['14h', 'Chuva Moderada'],
    ['15h', 'Chuva Fraca'],
    ['16h', 'Chuva Fraca'],
    ['17h', 'Chuva Moderada'],
    ['18h', 'Chuva Forte'],
    ['19h', 'Sem Chuva'],
  ];

  return (
    <div className="cards-container">
      {rain.map((hourAndSeverity, idx) => <Card date="08/12" rain={hourAndSeverity} key={idx} />)}
    </div>
  );
};

export default Cards;
