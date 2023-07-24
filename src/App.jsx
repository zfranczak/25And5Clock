import { useState } from 'react';
import './App.css';
import BreakTime from './components/BreakTime';
import WorkTime from './components/workTime';
import Timer from './components/timer';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>25 & 5 Clock</h1>
      <div className='container'>
        <div className='set-time'>
          <WorkTime />
          <BreakTime />
        </div>
        <Timer count={count} />
      </div>
      {/* <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      <Footer />
    </>
  );
}

export default App;
