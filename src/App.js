import React from 'react';
import Start from './pages/start.tsx';
import Meet from './pages/meet.tsx'
import './style/app.css';

function App() {
  // <Route path='/' element={<Start/>}></Route>
  // <Route path='/Meet' element={<Meet />}></Route>
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