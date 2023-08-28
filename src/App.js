import logo from './logo.svg';
import './App.css';

import TestElement from './testElement';

function App() {
  return (
    <div className="App">
      <h1 className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestElement/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </h1>
    </div>
  );
}

export default App;
