import React, { Component } from 'react';
import './css/style.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav'
import Home from './Components/Home';
import About from './Components/About';
import Career from './Components/Career';
import Technology from './Components/Technology';
import Footer from './Components/Footer';

export class App extends Component {
  render() {
    return (
      <div>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/about" element={<About />} />
            <Route path="/career" element={<Career />} />
          </Routes>
          <Footer/>
      </div>
    );
  }
}

export default App;
