// WorkTime.jsx
import React from 'react';
import Increment from './Increment';
import Decrement from './Decrement';
import '../styles/work-time.css';

const WorkTime = ({ sessionCount, setSessionCount }) => {
  const handleIncrement = () => {
    setSessionCount(sessionCount + 1);
  };

  const handleDecrement = () => {
    setSessionCount(sessionCount - 1);
  };

  return (
    <div className='container-work'>
      <Increment
        id='session-increment'
        count={sessionCount}
        handleIncrement={handleIncrement}
      />
      <h2 id='session-label'>WorkTime: </h2>
      <h2 id='session-length'>{sessionCount} minutes</h2>
      <Decrement
        id='session-decrement'
        count={sessionCount}
        handleDecrement={handleDecrement}
      />
    </div>
  );
};

export default WorkTime;
