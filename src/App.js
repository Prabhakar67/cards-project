import { Routes,Route,BrowserRouter } from 'react-router-dom';
import './App.css';
import MediumShreshth from './components/MediumShreshth';
import Atituchh from './components/AtiTuchh.js';
import AtiShreshth from './components/AtiShreshth';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<AtiShreshth/>} />
          <Route exact path="MediumShreshth" element={<MediumShreshth/>} />
          <Route exact path="Atituchh" element={<Atituchh/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
