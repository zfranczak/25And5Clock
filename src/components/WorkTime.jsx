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
      <Increment count={count} handleIncrement={handleIncrement} />
      <h2>WorkTime: {count} minutes</h2>
      <Decrement count={count} handleDecrement={handleDecrement} />
    </div>
  );
};

export default WorkTime;
