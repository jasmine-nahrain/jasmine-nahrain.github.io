/*
 * Academic Experiences and Projects,
 */

import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import academic from './academic.json';
import github from '../images/github.svg';
import {FiLinkedin} from 'react-icons/fi';
import microsoft from '../images/microsoft.png';
import motorsports2 from '../images/motorsports2.webp';
import lucy from '../images/lucy.jpeg';
import googlecomp from '../images/googlecomp.jpeg';

var colours = ['#e6e6e6', '#383838', '#383838', '#e6e6e6']
var fontColours = ['#383838', '#e6e6e6', '#e6e6e6', '#383838']
export default class Academic extends Component {

  render() {

    return (
      <BrowserRouter>
      <h1>Academic Experiences</h1>
      <div class="academic">
        {academic.map((info, i) =>
          <div class="academic-grid">
            <div class="academic-container" key={i} style={{'background-color':  colours[i], 'color': fontColours[i], 'grid-column': i%2===0 ? '1' : '2', 'grid-row': '1'}}>
              <div className="academic-content">
                <p className="academic-overline">{info.date}</p>
                <h2 className="academic-title">{info.title}</h2>
                <div className="academic-description">
                <p>{info.description1}</p>
                <p>{info.description2}</p>
                </div>

                <div className="academic-links">
                  {info.linkedin && (
                    <a href={info.linkedin} target="_blank" aria-label="Linkedin Link">
                      <FiLinkedin src={github} color={i===1 || i===2 ? "white" : "black"} size="24px"/>
                    </a>
                  )}
                </div>
                </div>
                </div>
                <img src={info.image} style={{'grid-column': i%2===0 ? '2' : '1', 'grid-row': '1'}} alt={info.title}/>
              </div>
        )}
        </div>
      </BrowserRouter>
    );
  }
}
