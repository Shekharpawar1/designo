
import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import HomePage from './component/HomePage';
import About from './component/About';
import Location from './component/Location';
import Contact from './component/Contact';


function App() {
  return (
    <Router>
       <Navbar/>
       <Routes>
         <Route exact path="/" element={<HomePage/>}/>
         <Route exact path="/about" element={<About/>}/>
         <Route exact path="/contact" element={<Contact/>}/>
         <Route exact path="/location" element={<Location/>}/>
       </Routes>

    </Router>
   
  );
}

export default App;
