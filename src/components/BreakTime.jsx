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
      <Increment
        id='break-increment'
        count={count}
        handleIncrement={handleIncrement}
      />
      <h2 id='break-label'>BreakTime: </h2>
      <h2 id='break-length'>{count} minutes</h2>
      <Decrement
        id='break-decrement'
        count={count}
        handleDecrement={handleDecrement}
      />
    </div>
  );
};

export default BreakTime;
