import logo from './logo.svg';
import './App.css';
import './test/typescript.tsx'
import TestTsx from './test/typescript.tsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This page is for lsh
        </p>
        <p>
          javascript <br/>
          1. 생성자 함수 <br/>
          2. 비동기 함수 <br/>
        </p>
        {TestTsx()}
      </header>
    </div>
  );
}

export default App;
