import React from 'react';

const Timer = ({ count }) => {
  return (
    <div className='container-timer'>
      <h2>Timer</h2>
      <div className='countdown-clock'>{count}</div>
    </div>
  );
};

export default Timer;
