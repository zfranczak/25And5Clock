// Decrement.jsx
import React from 'react';

const Decrement = ({ id, count, handleDecrement }) => {
  return (
    <button id={id} onClick={handleDecrement}>
      DOWN
    </button>
  );
};

export default Decrement;
