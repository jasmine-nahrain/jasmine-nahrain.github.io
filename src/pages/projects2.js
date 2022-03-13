/*
 * Academic Experiences and Projects,
 */

import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import projects from './projects.json';
import github from '../images/github.svg';
import quantum from '../images/quantum.PNG';
import {FiGithub} from 'react-icons/fi';

var colours = ['rgb(230,230,230)', '#383838']
var fontColours = ['#383838', 'rgb(230,230,230)']

export default class Projects extends Component {

  render() {

    return (
      <BrowserRouter>
      <h1>Academic Projects</h1>
      <div class="project">
        {projects.map((info, i) =>
          <div class="project-container" key={i}>
            <div className="project-content" style={{'grid-column': info.id%2==0 ? '2' : '1', 'grid-row': info.id-1+''}}>
              <p className="project-overline">{info.date}</p>
              <h2 className="project-title">{info.title}</h2>
              <div className="project-description">
              <p>{info.description}</p>
              </div>

              <div className="project-links">
                {info.linkedin && (
                  <a href={info.github} target="_blank" aria-label="Github Link">
                    <FiGithub src={github} color="white" size="24px"/>
                  </a>
                )}
              </div>
              </div>
              <div className="project-image" style={{'grid-column': info.id%2==0 ? '1' : '2', 'grid-row': info.id-1+''}}>
                <img src={info.image} />
              </div>
            </div>
        )}
        </div>
      </BrowserRouter>
    );
  }
}
