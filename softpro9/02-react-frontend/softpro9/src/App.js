import logo from './logo.svg';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Academy from './components/Academy';
import Contact from './components/Contact';
import Service from './components/Service';
import Carrer from './components/Carrer';


import './App.css';


function App() {
  return (
    <>
    <Router>
     <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/academy" element={<Academy/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/carrer" element={<Carrer/>} />

          
        </Routes>
    </Router>
    </>
  );
}

export default App;
