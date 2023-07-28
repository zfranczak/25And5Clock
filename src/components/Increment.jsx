// Increment.jsx
import React from 'react';

const Increment = ({ id, handleIncrement }) => {
  return (
    <button className='btn' id={id} onClick={handleIncrement}>
      +
    </button>
  );
};

export default Increment;
