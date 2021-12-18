import React, { useState, useRef, useEffect } from 'react';

import './style.scss';

const Dropdown = function Dropdown({ selected, setSelected, locations }) {
  const [isActive, setIsActive] = useState(false);
  const [arrow, setArrow] = useState('>');

  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (event) => {
      if (isActive && ref.current && !ref.current.contains(event.target)) {
        setIsActive(false);
        setArrow('>');
      }
    };
    document.addEventListener('click', checkIfClickedOutside);
    return () => {
      document.removeEventListener('click', checkIfClickedOutside);
    };
  }, [isActive]);

  function handleClick() {
    if (isActive) {
      setIsActive(false);
      setArrow('>');
    } else {
      setIsActive(true);
      setArrow('<');
    }
  }

  return (
    <div className="dropdown" ref={ref}>
      <div className="dropdown-btn" onClick={handleClick} aria-hidden="true">
        {selected}
        <span className="dropdown-arrow">{arrow}</span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {!!locations && locations.map(({ id, neighbourhood, state }) => (

            <div
              key={id}
              onClick={() => {
                setSelected(neighbourhood);
                setIsActive(false);
                setArrow('>');
              }}
              aria-hidden="true"
              className="dropdown-item"
            >
              {`${neighbourhood}/${state}`}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
