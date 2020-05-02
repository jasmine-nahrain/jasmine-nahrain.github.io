import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home.js';
import AboutMe from './pages/about-me.js';
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

            <Route exact={true} path='/about-me' render={() => (
              <div className="App">
                <AboutMe />
              </div>
            )}/>

          </BrowserRouter>
      );
    }
  }

  export default App;
