// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import BreakTime from './components/BreakTime';
import WorkTime from './components/WorkTime';
import Timer from './components/Timer';
import Footer from './components/Footer';

const playAudio = () => {
  const audioElement = document.getElementById('beep');
  if (audioElement) {
    audioElement.currentTime = 0; // Reset the audio to the beginning
    audioElement.play();
  }
};

let interval;

function App() {
  const defaultBreakCount = 5;
  const defaultSessionCount = 25;

  const [breakCount, setBreakCount] = useState(defaultBreakCount);
  const [sessionCount, setSessionCount] = useState(defaultSessionCount);
  const [timerActive, setTimerActive] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState(sessionCount * 60);
  const [workOrBreak, setWorkOrBreak] = useState('work');

  useEffect(() => {
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

    return () => clearInterval(interval);
  }, [timerActive, remainingSeconds]);

  const handleReset = () => {
    const audioElement = document.getElementById('beep');
    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
    }
    clearInterval(interval);

    setBreakCount(defaultBreakCount);
    setSessionCount(defaultSessionCount);
    setTimerActive(false);
    setRemainingSeconds(defaultSessionCount * 60);
    setWorkOrBreak('work');
  };

  return (
    <>
      <h1 className='title'>25 & 5 Clock</h1>
      <div className='container'>
        <div className='set-time'>
          <WorkTime
            sessionCount={sessionCount}
            setSessionCount={setSessionCount}
            timerActive={timerActive}
            setTimerActive={setTimerActive}
          />
          <BreakTime
            breakCount={breakCount}
            setBreakCount={setBreakCount}
            timerActive={timerActive}
            setTimerActive={setTimerActive}
          />
        </div>
        <div className='timer-box'>
          <Timer
            sessionCount={sessionCount}
            breakCount={breakCount}
            timerActive={timerActive}
            setTimerActive={setTimerActive}
            handleReset={handleReset}
            remainingSeconds={remainingSeconds}
            setRemainingSeconds={setRemainingSeconds}
            workOrBreak={workOrBreak}
          />
        </div>
      </div>

      <button id='reset' onClick={handleReset}>
        Reset
      </button>
      <Footer />
    </>
  );
}

export default App;
