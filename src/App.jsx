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

  const handleReset = () => {
    setBreakCount(defaultBreakCount);
    setSessionCount(defaultSessionCount);
  };

  return (
    <>
      <h1>25 & 5 Clock</h1>
      <div className='container'>
        <div className='set-time'>
          <WorkTime
            sessionCount={sessionCount}
            setSessionCount={setSessionCount}
          />
          <BreakTime breakCount={breakCount} setBreakCount={setBreakCount} />
        </div>
        <Timer sessionCount={sessionCount} breakCount={breakCount} />
      </div>

      <button id='reset' onClick={handleReset}>
        Reset
      </button>
      <Footer />
    </>
  );
}

export default App;
