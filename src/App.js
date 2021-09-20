import './App.css';
import  Navbar from "./components/Navbar"
import Jumbotron from './components/Jumbotron';
import Card from './components/Card';
import RandomLogic from './components/RandomLogic';

function App() {
  return ( <div className="container">
    
    <Navbar />
    <Jumbotron />
    <RandomLogic />
    
  </div>
  );
}


export default App;

//This is where you will put together the look of the components on the page for viewing.