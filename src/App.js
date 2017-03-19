import React, { Component } from 'react';
import Header from './components/Header';
import Home from './pages/home/components/Home';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    console.log('App', this.props);
    return (
      <div className='wrapper-app'>
        <Header />
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={Footer}/>
        <Footer />
      </div>
    );
  }
}

export default App;

