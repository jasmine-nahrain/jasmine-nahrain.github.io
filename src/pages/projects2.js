/*
 * Academic Experiences and Projects,
 */

import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import projects from './projects.json';
import github from '../images/github.svg';
import {FiGithub} from 'react-icons/fi';

export default class Projects extends Component {

  render() {

    return (
      <BrowserRouter>
      <h1>Projects</h1>
        {projects.map((info, i) =>
          <div class="project-container" key={i}>
            <div className="project-content">
              <p className="project-overline">{info.year}</p>
              <h2 className="project-title">{info.title}</h2>
              <div className="project-description">
              <p>{info.description}</p>
              </div>

              {info.techstack.length && (
                <ul className="project-tech-list">
                  {info.techstack.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              )}

              <div className="project-links">
                {info.github && (
                  <a href={info.github} aria-label="GitHub Link">
                    <FiGithub src={github} color="white" size="24px"/>
                  </a>
                )}
              </div>
              </div>

              <div className="project-image">
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
