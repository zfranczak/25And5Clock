// App.jsx
import React, { useState } from 'react';
import './App.css';
import BreakTime from './components/BreakTime';
import WorkTime from './components/WorkTime';
import Timer from './components/Timer';
import Footer from './components/Footer';

function App() {
  const defaultBreakCount = 5;
  const defaultSessionCount = 25;

  const [breakCount, setBreakCount] = useState(defaultBreakCount);
  const [sessionCount, setSessionCount] = useState(defaultSessionCount);
  const [timerActive, setTimerActive] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState(sessionCount * 60);

  const handleReset = () => {
    const audioElement = document.getElementById('beep');
    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
    }
    setBreakCount(defaultBreakCount);
    setSessionCount(defaultSessionCount);
    setTimerActive(false);
    setRemainingSeconds(defaultSessionCount * 60);
  };

  return (
    <>
      <h1>25 & 5 Clock</h1>
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
        <Timer
          sessionCount={sessionCount}
          breakCount={breakCount}
          timerActive={timerActive}
          setTimerActive={setTimerActive}
          handleReset={handleReset}
          remainingSeconds={remainingSeconds}
          setRemainingSeconds={setRemainingSeconds}
        />
      </div>

      <button id='reset' onClick={handleReset}>
        Reset
      </button>
      <Footer />
    </>
  );
}

export default App;
