import logo from './Tree-Club-House.svg';
import './App.css';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Home/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          TreeHaus Sounds
        </h3>
        <p>
          website under construction :(
        </p>
      </header>
    </div>
  );
}

export default App;
