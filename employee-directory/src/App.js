import './App.css';
import  Navbar from "./components/Navbar"
import Jumbotron from './components/Jumbotron';
import Card from './components/Card';
import RandomLogic from './components/RandomLogic';

function App() {
  return ( <div className="container">
    <RandomLogic />
    <Navbar />
    <Jumbotron />
    <Card />
  </div>
  );
}


export default App;
