import React from 'react';

const Timer = ({ count }) => {
  return (
    <div className='container-timer'>
      <h2 id='timer-label'>Timer</h2>
      <div className='countdown-clock' id='time-left'>
        25:00
      </div>
    </div>
  );
};

export default Timer;
