import { useState } from 'react';
import Dropdown from '../components/Dropdown';
import './style.scss';

function Home() {
  const [selected, setSelected] = useState('Choose One');
  return (
    <section className='container'>
      <h1>Previsão de Chuva - Horário</h1>
      <h2>
        Bairro: <Dropdown selected={selected} setSelected={setSelected} />
      </h2>
    </section>
  );
}

export default Home;
