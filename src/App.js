
import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import HomePage from './component/HomePage';
import About from './component/About';
import LocationMap from './component/LocationMap';
import Contact from './component/Contact';
import WebDesign from './component/WebDesign';
import AppDesign from './component/AppDesign';
import GraphicDesign from './component/GraphicDesign';


function App() {
  return (
    <Router>
       <Navbar/>
       <Routes>
         <Route exact path="/" element={<HomePage/>}/>
         <Route exact path="/about" element={<About/>}/>
         <Route exact path="/contact" element={<Contact/>}/>
         <Route exact path="/location" element={<LocationMap/>}/>
         <Route exact path="/web-design" element={<WebDesign/>}/>
         <Route exact path="/app-design" element={<AppDesign/>}/>
         <Route exact path="/graphic-design" element={<GraphicDesign/>}/>
       </Routes>

    </Router>
   
  );
}

export default App;
