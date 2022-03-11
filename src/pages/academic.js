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

export default class Academic extends Component {

  render() {

    return (
      <BrowserRouter>
      <h1>Academic Projects</h1>
        {academic.map((info, i) =>
          <div class="academic-container" key={i}>
            <div className="academic-content">
              <p className="academic-overline">{info.date}</p>
              <h2 className="academic-title">{info.title}</h2>
              <div className="academic-description">
              <p>{info.description}</p>
              </div>

              <div className="academic-links">
                {info.github && (
                  <a href={info.github} aria-label="GitHub Link">
                    <FiGithub src={github} color="white" size="24px"/>
                  </a>
                )}
              </div>
              </div>

              <div className="academic-image">
              <a href={info.github}>
                <img alt={info.title} className="img" src={info.image}/>
              </a>
            </div>
          </div>
        )}
      </BrowserRouter>
    );
  }
}
