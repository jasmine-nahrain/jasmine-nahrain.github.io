import React, { Component } from 'react';
import './App.css';
import Home from './pages/homeAgain.js';
import About from './pages/about-me.js';
import Project from './pages/projects.js';
import Contact from './pages/contact.js';
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    console.log("This is the process.env", process.env.PUBLIC_URL)
    return (
        <div>
            <Route exact={true} path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/project' component={Project}/>
            <Route exact path='/contact' component={Contact}/>
          </div>
      );
    }
  }

  export default App;
