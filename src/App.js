import React, { Component } from 'react';
import './App.css';
import Home from './pages/home.js';
import About from './pages/AboutMe.js'
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

          </BrowserRouter>
      );
    }
  }

  export default App;
