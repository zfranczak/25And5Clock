import React, { useState, useEffect } from 'react';
import '../styles/timer.css';

const playAudio = () => {
  const audioElement = document.getElementById('beep');
  if (audioElement) {
    audioElement.currentTime = 0; // Reset the audio to the beginning
    audioElement.play();
  }
};

const Timer = ({
  timerActive,
  setTimerActive,
  sessionCount,
  breakCount,
  handleReset,
  remainingSeconds,
  setRemainingSeconds,
}) => {
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
          playAudio();
        }, 1000);
        return;
      } else {
        setTimeout(() => {
          setRemainingSeconds(sessionCount * 60);
          setWorkOrBreak('work');
          setTimerActive(true);
          playAudio();
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
