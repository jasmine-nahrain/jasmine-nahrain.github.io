/*
 * Leadership
 */

import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import leadership from './leadership.json';
import github from '../images/github.svg';
import {FiLinkedin} from 'react-icons/fi';

var colours = ['#e6e6e6', '#383838', '#383838', '#e6e6e6']
var fontColours = ['#383838', '#e6e6e6', '#e6e6e6', '#383838']
export default class Leadership extends Component {

  render() {

    return (
      <BrowserRouter>
      <h1>Leadership</h1>
      <div class="academic">
        {leadership.map((info, i) =>
          <div class="academic-container"
            key={i}
            style={{'background-color':  colours[i], 'color': fontColours[i], marginBottom: "1%"}}>
            <div className="academic-content">
              <p className="academic-overline">{info.date}</p>
              <h2 className="academic-title">{info.title} <span style={{'color': 'hotpink'}}>@ {info.team}</span></h2>
              <div className="academic-description">
              <p>{info.description}</p>
              </div>
              </div>
              </div>
        )}
        </div>
      </BrowserRouter>
    );
  }
}
