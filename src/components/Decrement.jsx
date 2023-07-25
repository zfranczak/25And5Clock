// Decrement.jsx
import React from 'react';

const Decrement = ({ id, handleDecrement }) => {
  return (
    <button id={id} onClick={handleDecrement}>
      DOWN
    </button>
  );
};

export default Decrement;
