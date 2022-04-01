import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>benchmark</p>
      <header className="App-header">
        {[...Array(1000)].map((elem, index) => <img key={index} src={logo} className="App-logo" alt="logo" />)}
      </header>

    </div>
  );
}

export default App;
