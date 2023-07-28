// WorkTime.jsx
import React from 'react';
import Increment from './Increment';
import Decrement from './Decrement';
import '../styles/work-time.css';

const WorkTime = ({ timerActive, sessionCount, setSessionCount }) => {
  const handleIncrement = () => {
    if (!timerActive && sessionCount < 60) {
      setSessionCount(sessionCount + 1);
    }
  };

  const handleDecrement = () => {
    if (!timerActive && sessionCount > 1) {
      setSessionCount(sessionCount - 1);
    }
  };

  return (
    <div className='container-work'>
      <h2 id='session-label'>Session Time: </h2>
      <span>
        <h2 id='session-length'>{sessionCount} </h2>
        <h2>Minutes</h2>
      </span>
      <span>
        <Increment
          id='session-increment'
          count={sessionCount}
          handleIncrement={handleIncrement}
          disabled={timerActive}
        />
        <Decrement
          id='session-decrement'
          count={sessionCount}
          handleDecrement={handleDecrement}
          disabled={timerActive}
        />
      </span>
    </div>
  );
};

export default WorkTime;
