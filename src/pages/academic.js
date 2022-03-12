/*
 * Academic Experiences and Projects,
 */

import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import academic from './academic.json';
import github from '../images/github.svg';
import {FiGithub} from 'react-icons/fi';
import {FiLinkedin} from 'react-icons/fi';

var colours = ['#A0816C', '#E8DED1', '#D1C0A8', '#BFAA8C']
export default class Academic extends Component {

  render() {

    return (
      <BrowserRouter>
      <h1>Academic Experiences</h1>
      <div class="academic">
        {academic.map((info, i) =>
          <div class="academic-container" key={i} style={{'background-color':  colours[i]}}>
            <div className="academic-content">
              <p className="academic-overline">{info.date}</p>
              <h2 className="academic-title">{info.title}</h2>
              <div className="academic-description">
              <p>{info.description}</p>
              </div>

              <div className="academic-links">
                {info.linkedin && (
                  <a href={info.linkedin} target="_blank" aria-label="Linkedin Link">
                    <FiLinkedin src={github} color="white" size="24px"/>
                  </a>
                )}
              </div>
              </div>
              </div>
        )}
        </div>
      </BrowserRouter>
    );
  }
}
