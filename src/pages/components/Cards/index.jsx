/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import Card from './Card';
import './style.scss';

const Cards = function Cards({ forecasts, selected }) {
  const [dateList, setDateList] = useState([]);

  function getSelectedNeighbourhood() {
    const filtered = forecasts.filter((element) => element.neighbourhood === selected);

    setDateList(filtered[0]?.forecast);
  }

  useEffect(() => getSelectedNeighbourhood(), [selected]);

  return (
    <div className="cards-container">
      {!!dateList && dateList.map(
        ({ day, hour, millimeters }, id) => (
          <Card
            day={day}
            hour={hour}
            millimeters={millimeters}
            key={id}
          />
        ),
      )}
    </div>
  );
};

export default Cards;
