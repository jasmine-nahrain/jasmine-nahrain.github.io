/*
 * Teamwork
 */

import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import teamwork from './teamwork.json';
import github from '../images/github.svg';
import {FiLinkedin} from 'react-icons/fi';
import netballImage from '../images/netball.jpeg';
import motorsportsImage from '../images/motorsports.webp';
var colours = ['#e6e6e6', '#383838', '#383838', '#e6e6e6']
var fontColours = ['#383838', '#e6e6e6', '#e6e6e6', '#383838']
export default class Teamwork extends Component {

  render() {

    return (
      <BrowserRouter>
      <h1>Teamwork</h1>
      <div class="academic">
        {teamwork.map((info, i) =>
          <div class="academic-grid">
          <div class="academic-container"
            key={i}
            style={{'background-color':  colours[i], 'color': fontColours[i], 'grid-column': i%2===0 ? '1' : '2', 'grid-row': '1'}}>
            <div className="academic-content">
              <h2 className="academic-title">{info.title}</h2>
              <div className="academic-description">
              <p>{info.description1}</p>
              <p>{info.description2}</p>
              <p>{info.description3}</p>
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
