import Footer from '../src/components/Footer'
import Header from '../src/components/Header';
import Home from '../src/pages/Home'
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Header />
      <HashRouter>
          <Route path="/" component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;
