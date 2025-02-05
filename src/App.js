import React from 'react';
import Start from './pages/start.tsx';
import Meet from './pages/meet.tsx'
import './style/app.css';

function App() {
  const Page={
      start : <Start/>,
      meet: <Meet/>,
      // name: <MakeName/>,
      // finsh: <Finsh/> 
    }
  return (
    <>
      <div className='app'>
        <div className='mobile-bg'>
          {Page["start"]}
        </div>
      </div>
  </>
  );
}

export default App;