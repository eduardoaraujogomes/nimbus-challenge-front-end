import { useState, useRef, useEffect } from 'react';

import './style.scss';

function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const [arrow, setArrow] = useState('>');

  const ref = useRef()



  useEffect(() => {
    const  checkIfClickedOutside = (event) => {
      if(isActive && ref.current && !ref.current.contains(event.target)){
        setIsActive(false);
        setArrow('>')
      }
    }    
    document.addEventListener('click', checkIfClickedOutside)
    return () => {
      document.removeEventListener('click', checkIfClickedOutside)
    }    
  }, [isActive])
  
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
    <div className='dropdown' ref={ref} >
      <div className='dropdown-btn' onClick={handleClick}>
        {selected}
        <span className='dropdown-arrow'>{arrow}</span>
      </div>
      {isActive && (
        <div className='dropdown-content'>
          {options.map((option, idx) => (
            <div key={idx}
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
