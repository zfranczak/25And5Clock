import React, { useState, useEffect } from 'react';
import '../styles/timer.css';

const Timer = ({ sessionCount, breakCount }) => {
  const [remainingSeconds, setRemainingSeconds] = useState(sessionCount * 60);
  const [timerActive, setTimerActive] = useState(false);
  const [workOrBreak, setWorkOrBreak] = useState('work');

  useEffect(() => {
    setRemainingSeconds(sessionCount * 60);
  }, [sessionCount]);

  useEffect(() => {
    let interval;

    if (timerActive && remainingSeconds > 0) {
      interval = setInterval(() => {
        setRemainingSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (remainingSeconds === 0) {
      if (workOrBreak === 'work') {
        setTimeout(() => {
          setRemainingSeconds(breakCount * 60);
          setTimerActive(true);
          setWorkOrBreak('break');
        }, 1000);
        return;
      } else {
        setTimeout(() => {
          setRemainingSeconds(sessionCount * 60);
          setWorkOrBreak('work');
          setTimerActive(true);
        }, 1000);
        return;
      }
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

  const timeLeft = formatTime(remainingSeconds);

  const handleStartPause = () => {
    setTimerActive((prevActive) => !prevActive);
  };

  const handleReset = () => {
    setRemainingSeconds(sessionCount * 60);
    setTimerActive(false);
  };

  return (
    <div className='container-timer'>
      <h2>Time Left</h2>
      <h2 id='time-left'>{timeLeft}</h2>
      <h4 id='timer-label' className={`clock-type-${workOrBreak}`}>
        {workOrBreak}
      </h4>
      {/* Start/Pause button */}
      <button id='start_stop' onClick={handleStartPause}>
        {timerActive ? 'Pause' : 'Start'}
      </button>
      {/* Reset button */}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
export default Timer;
