// Decrement.jsx
import React from 'react';

const Decrement = ({ id, handleDecrement }) => {
  return (
    <button className='btn' id={id} onClick={handleDecrement}>
      -
    </button>
  );
};

export default Decrement;
