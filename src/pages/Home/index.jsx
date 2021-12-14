import { useState } from 'react';
import Dropdown from '../components/Dropdown';
import Cards from '../components/Cards';
import './style.scss';

function Home() {
  const [selected, setSelected] = useState('Choose One');
  return (
    <section className='container'>
      <h1>Previsão de Chuva - Horário</h1>
      <div className='container-dropdown'>
        <p>Bairro: </p>
        <Dropdown selected={selected} setSelected={setSelected} />
      </div>
      <Cards />
    </section>
  );
}

export default Home;
