// BreakTime.jsx
import React from 'react';
import Increment from './Increment';
import Decrement from './Decrement';
import '../styles/break-time.css';

const BreakTime = ({ timerActive, breakCount, setBreakCount }) => {
  const handleIncrement = () => {
    if (!timerActive && breakCount < 60) {
      setBreakCount(breakCount + 1);
    }
  };

  const handleDecrement = () => {
    if (!timerActive && breakCount > 1) {
      setBreakCount(breakCount - 1);
    }
  };

  return (
    <div className='container-break'>
      <Increment
        id='break-increment'
        count={breakCount}
        handleIncrement={handleIncrement}
      />
      <h2 id='break-label'>BreakTime: </h2>
      <span>
        <h2 id='break-length'>{breakCount}</h2>
        <h2> Minutes</h2>
      </span>
      <Decrement
        id='break-decrement'
        count={breakCount}
        handleDecrement={handleDecrement}
      />
    </div>
  );
};

export default BreakTime;
