import './style/app.css';
import {GbPage} from './hooks/hooks.tsx'

function App() {
  return (
    <div className="app">
      <div className='bg-size'>
        this is contents
        <GbPage />
      </div>
    </div>
  );
}

export default App;
