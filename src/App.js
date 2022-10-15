import { Routes,Router,Route,BrowserRouter,Link } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact.js';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route  index element={<Home/>} />
          <Route exact path="About" element={<About/>} />
          <Route exact path="Contact" element={<Contact/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
