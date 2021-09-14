import './App.css';
import  Navbar from "./components/Navbar"
import Jumbotron from './components/Jumbotron';
import Card from './components/Card';

function App() {
  return ( <div className="container">
    <Navbar />
    <Jumbotron />
    <Card />
  </div>
  );
}


/*   return (
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
      </header>
    </div>
  ); */


export default App;
