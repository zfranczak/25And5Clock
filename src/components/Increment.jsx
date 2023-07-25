// Increment.jsx
import React from 'react';

const Increment = ({ id, handleIncrement }) => {
  return (
    <button id={id} onClick={handleIncrement}>
      +
    </button>
  );
};

export default Increment;
