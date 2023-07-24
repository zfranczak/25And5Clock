// BreakTime.jsx
import React, { useState } from 'react';
import Increment from './Increment';
import Decrement from './Decrement';
import '../styles/break-time.css';

const BreakTime = () => {
  const [count, setCount] = useState(5);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className='container-break'>
      <Increment count={count} handleIncrement={handleIncrement} />
      <h2>BreakTime: {count} minutes</h2>
      <Decrement count={count} handleDecrement={handleDecrement} />
    </div>
  );
};

export default BreakTime;
