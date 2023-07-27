import React, { useState, useEffect } from 'react';
import '../styles/timer.css';

const Timer = ({
  timerActive,
  setTimerActive,
  sessionCount,
  breakCount,
  handleReset,
  remainingSeconds,
  setRemainingSeconds,
  workOrBreak,
}) => {
  useEffect(() => {
    setRemainingSeconds(sessionCount * 60);
  }, [sessionCount]);

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
      <audio id='beep' src='/microwave-timer-117077.mp3' preload='auto' />
    </div>
  );
};
export default Timer;
