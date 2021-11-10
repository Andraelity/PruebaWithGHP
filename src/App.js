import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Hello this is an react app </h1>
      <h2> Autor: Andres </h2>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
