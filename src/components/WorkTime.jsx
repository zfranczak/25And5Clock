// WorkTime.jsx
import React, { useState } from 'react';
import Increment from './Increment';
import Decrement from './Decrement';
import '../styles/work-time.css';

const WorkTime = () => {
  const [count, setCount] = useState(25);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className='container-work'>
      <Increment
        id='session-increment'
        count={count}
        handleIncrement={handleIncrement}
      />
      <h2 id='session-label'>WorkTime: </h2>
      <h2 id='session-length'>{count} minutes</h2>
      <Decrement
        id='session-decrement'
        count={count}
        handleDecrement={handleDecrement}
      />
    </div>
  );
};

export default WorkTime;
