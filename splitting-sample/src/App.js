import logo from './logo.svg';
import './App.css';

// 상단 import 로 하면 메인에 포함되지만 
// 메소드 안 import로 하면 따로 build되어 저장된다.
function App() {
  const onClick = () => {
    import('./notify').then(result => result.default());
  }
  return (
    <div className="App">
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
        <p onClick={onClick}>Heeeeeeeee</p>
      </header>
    </div>
  );
}

export default App;
