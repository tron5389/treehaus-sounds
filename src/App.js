import logo from './Tree-Club-House.svg';
import './App.css';
import Home from './components/Home';
import Lineup from './components/Lineup';


function App() {
  return (
    <div className="App">
      <Home/>
      <Lineup/>
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
