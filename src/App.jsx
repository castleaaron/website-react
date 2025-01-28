import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';
import Stars from './assets/Stars'
import './Mobile.css';
import About from './Pages/About/About';
import Resume from './Pages/Resume/Resume';
import Projects from './Pages/Projects/Projects';
import Navbar from './assets/Navbar';
import Home from './Pages/Home/Home';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
      <Stars />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

function AppWrapper() {
  return (
    
    <Router>
      <App id="root"/>
    </Router>
  );
}

export default App;