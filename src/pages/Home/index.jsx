import React, { useEffect, useState } from 'react';
import Dropdown from '../components/Dropdown';
import Cards from '../components/Cards';
import Caption from '../components/Caption';
import api from '../../services/api';
import './style.scss';

const Home = function Home() {
  const [selected, setSelected] = useState('Selecione um Bairro');
  const [locations, setLocations] = useState([]);
  const [forecasts, setForecasts] = useState([]);

  const getForecasts = async () => {
    try {
      const response = await api.get('/forecasts');

      setForecasts([...response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const getLocations = async () => {
    getForecasts();
    try {
      const response = await api.get('/locations');

      setLocations([...response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <section className="container">
      <h1>Previsão de Chuva - Horário</h1>
      <div className="container-dropdown">
        <p>Bairro: </p>
        <Dropdown selected={selected} setSelected={setSelected} locations={locations} />
      </div>
      <Cards forecasts={forecasts} selected={selected} />
      {selected !== 'Selecione um Bairro' && <Caption />}
    </section>
  );
};

export default Home;
