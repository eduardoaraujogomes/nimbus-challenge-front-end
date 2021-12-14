import React from 'react';
import './style.scss';

const Caption = function Caption() {
  return (
    <div className="caption-container">
      <h4>Legenda</h4>
      <p>
        <span className="without-rain">Sem Chuva</span>
        {' - < 0.2 mm'}
      </p>
      <p>
        <span className="week-rain">Chuva Fraca</span>
        {' - 0.2 a 5.0 mm'}
      </p>
      <p>
        <span className="moderate-rain">Chuva Moderada</span>
        {' - 5.1 a 25.0 mm'}
      </p>
      <p>
        <span className="strong-rain">Chuva Forte</span>
        {' - > 25.0 mm'}
      </p>
    </div>
  );
};

export default Caption;
