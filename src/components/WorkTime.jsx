// WorkTime.jsx
import React, { useState } from 'react';
import Increment from './Increment';
import Decrement from './Decrement';
import '../styles/work-time.css';

const WorkTime = () => {
  const [workCount, setWorkCount] = useState(25);

  const handleIncrement = () => {
    setWorkCount(workCount + 1);
  };

  const handleDecrement = () => {
    setWorkCount(workCount - 1);
  };

  return (
    <div className='container-work'>
      <Increment
        id='session-increment'
        count={workCount}
        handleIncrement={handleIncrement}
      />
      <h2 id='session-label'>WorkTime: </h2>
      <h2 id='session-length'>{workCount} minutes</h2>
      <Decrement
        id='session-decrement'
        count={workCount}
        handleDecrement={handleDecrement}
      />
    </div>
  );
};

export default WorkTime;
