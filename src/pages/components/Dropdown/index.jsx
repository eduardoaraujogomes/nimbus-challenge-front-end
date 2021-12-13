import { useState } from 'react';
import './style.scss';

function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const [arrow, setArrow] = useState('>');

  function handleClick() {
    if (isActive) {
      setIsActive(false);
      setArrow('>');
    } else {
      setIsActive(true);
      setArrow('<');
    }
  }

  const options = ['Copacabana/RJ', 'Marília/SP', 'João Pesosa/PB'];
  return (
    <div className='dropdown'>
      <div className='dropdown-btn' onClick={() => handleClick()}>
        {selected}
        <span className='dropdown-arrow'>{arrow}</span>
      </div>
      {isActive && (
        <div className='dropdown-content'>
          {options.map((option) => (
            <div
              onClick={() => {
                setSelected(option);
                setIsActive(false);
                setArrow('>');
              }}
              className='dropdown-item'
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
