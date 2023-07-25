// Increment.jsx
import React from 'react';

const Increment = ({ id, handleIncrement }) => {
  return (
    <button id={id} onClick={handleIncrement}>
      UP
    </button>
  );
};

export default Increment;
