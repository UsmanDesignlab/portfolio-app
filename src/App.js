import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './components/common/heading/header';
import Home from './components/common/main/home';
import Footer from './components/common/footer/footer';
import About from './components/about/about';
import Contact from './components/contact/contact';
import "./App.css"

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
