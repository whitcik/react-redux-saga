import React, { Component } from 'react';
import Header from './components/Header';
import Home from './pages/home/components/Home';
import About from './pages/about/components/About';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';
import routePaths from 'constans/routePaths';
import './App.css';

class App extends Component {

  render() {
    console.log('App', this.props);
    return (
      <div className='height-100p'>
        <Header />
        <Route exact path={routePaths.HOME} component={Home}/>
        <Route path={routePaths.ABOUT} component={About}/>
        <Footer />
      </div>
    );
  }
}

export default App;

