import logo from './logo.svg';
import './App.css';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;