import Footer from '../src/components/Footer'
import Header from '../src/components/Header';
import Home from '../src/pages/Home'
import Navbar from './components/Navbar';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import React from 'react';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import NotFound  from './pages/NotFound';

function App() {
  return (
    <>
    <Header />
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/gallery" component={Gallery} />
      <Route exact path="/contact" component={Contact} />
      <Route component={NotFound} />
      </Switch>
    </Router>
    <Footer />
    </>
  );
}

export default App;
