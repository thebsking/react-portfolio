import Footer from '../src/components/Footer'
import Header from '../src/components/Header';
import Home from '../src/pages/Home'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import React from 'react';
import Gallery from './pages/Gallery';

function App() {
  return (
    <>
    <Header />
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/gallery" component={Gallery} />
    </Router>
    <Footer />
    </>
  );
}

export default App;
