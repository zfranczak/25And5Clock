// BreakTime.jsx
import React from 'react';
import Increment from './Increment';
import Decrement from './Decrement';
import '../styles/break-time.css';

const BreakTime = ({ breakCount, setBreakCount }) => {
  const handleIncrement = () => {
    setBreakCount(breakCount + 1);
  };

  const handleDecrement = () => {
    setBreakCount(breakCount - 1);
  };

  return (
    <div className='container-break'>
      <Increment
        id='break-increment'
        count={breakCount}
        handleIncrement={handleIncrement}
      />
      <h2 id='break-label'>BreakTime: </h2>
      <h2 id='break-length'>{breakCount} minutes</h2>
      <Decrement
        id='break-decrement'
        count={breakCount}
        handleDecrement={handleDecrement}
      />
    </div>
  );
};

export default BreakTime;
