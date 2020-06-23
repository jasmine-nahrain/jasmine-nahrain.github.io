import React, { Component } from 'react';
import './App.css';
import Home from './pages/homeAgain.js';
import About from './pages/about-me.js';
import Project from './pages/projects.js';
import Contact from './pages/contact.js';
import {BrowserRouter, Route} from 'react-router-dom';



class App extends Component {
  render() {
    return (
        <BrowserRouter>

            <Route exact={true} path='/' render={() => (
              <div className="App">
                <Home />
              </div>
            )}/>
            <Route exact={true} path='/about' render={() => (
              <div className="App">
                <About />
              </div>
            )}/>

            <Route exact={true} path='/project' render={() => (
              <div className="App">
                <Project />
              </div>
            )}/>

            <Route exact={true} path='/contact' render={() => (
              <div className="App">
                <Contact />
              </div>
            )}/>

          </BrowserRouter>
      );
    }
  }

  export default App;
