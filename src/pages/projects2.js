/*
 * Academic Experiences and Projects,
 */

import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter} from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import projects from './projects.json';
import github from '../images/github.svg';
import {FiGithub} from 'react-icons/fi';

const StyledProject = styled.div`
  visibility: visible;
  opacity: 1;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  transition: opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  -webkit-box-align: center;
  align-items: center;
  background-color:#394439;
  padding-bottom: 5%;
`;

export default class Projects extends Component {

  render() {

    return (
      <BrowserRouter>
        {projects.map((info, i) =>
          <StyledProject key={i}>
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
          </StyledProject>
        )}
      </BrowserRouter>
    );
  }
}
