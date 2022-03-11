/*
 * An About Me section (brief, succinct professional biography),
 */

import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import resume from '../images/Jasmine Emanouel Resume.pdf';
import Socials from '../components/Socials.js'
import Menu from '../components/Menu.js'
import me from '../images/me.jpeg';

export default class HomeAgain extends Component {
  render() {
    return (
        <div class="about-container">
          <div class="about-block">
            <img class="about-sidebar" src={me}/>
            <div class="about-text">
                    My name is Jasmine.
              <br/> I am currently studying a Bachelor of Engineering (Software), Diploma in Professional Practice
              <br/> At the University of Technology Sydney.
              <br/> I will graduate in May 2022.
              <br/> I am located in Sydney, Australia. (Willing to relocate)
              <br/> The highlight of my career has been interning for Google and Apple.
              <br/> I am most proud of my telemetry project.
              <br/> A challenge I enjoyed was the Microsoft protégé Competition (2020)
            </div>
          </div>
        </div>
    );
  }
}
