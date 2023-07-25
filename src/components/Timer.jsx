import React, { useState, useEffect } from 'react';

const Timer = ({ sessionCount, breakCount }) => {
  const [remainingSeconds, setRemainingSeconds] = useState(sessionCount * 60);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let interval;

    if (timerActive && remainingSeconds > 0) {
      interval = setInterval(() => {
        setRemainingSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (remainingSeconds === 0) {
      // Add logic here for when the timer reaches 0
      console.log('Timer completed!');
      setTimerActive(false);
    }

    // Clean up the interval when the component unmounts or when the timer is paused/stopped
    return () => clearInterval(interval);
  }, [timerActive, remainingSeconds]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  const handleStartPause = () => {
    setTimerActive((prevActive) => !prevActive);
  };

  const handleReset = () => {
    setRemainingSeconds(sessionCount * 60);
    setTimerActive(false);
  };

  return (
    <div className='container-timer'>
      <h2 id='timer-label'>Timer: {formatTime(remainingSeconds)}</h2>
      <div className='countdown-clock' id='time-left'>
        {/* Display the formatted time */}
        {formatTime(remainingSeconds)}
      </div>
      {/* Start/Pause button */}
      <button onClick={handleStartPause}>
        {timerActive ? 'Pause' : 'Start'}
      </button>
      {/* Reset button */}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;
