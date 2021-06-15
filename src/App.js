import Footer from '../src/components/Footer'
import Header from '../src/components/Header';
import Home from '../src/pages/Home'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import React from 'react';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <Header />
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/gallery" component={Gallery} />
      <Route exact path="/contact" component={Contact} />
    </Router>
    <Footer />
    </>
  );
}

export default App;
