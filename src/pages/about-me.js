/*
 * An About Me section (brief, succinct professional biography),
 */

import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter} from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import resume from '../images/Jasmine Emanouel Resume.pdf';
import Socials from '../components/Socials.js'
import Menu from '../components/Menu.js'
import me from '../images/me.jpeg';

const Body = styled.div`
  background-color: rgb(230,230,230);
  overflow: overlay;
  height: 100%;
  weight: 100%;
`;

const TextBlock = styled.div`
  /* width: 100%; */
  height: 100%;
  /* display: flex;
  align-items: center;
  justify-content: center;
   flex-flow: row; */
  display: flex;
`;

const SideBar = styled.img`
  flex-grow: 1;
  height: 100%;
  width: 50%;
  height: inherit;
    @media(max-width:800px) {
    display: none;
  }
`;

const About = styled.div`
  width: 100%;
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  padding: 5%;
`;

export default class HomeAgain extends Component {
  render() {
    return (
      <BrowserRouter>
        <Body>
          <TextBlock>
            <SideBar src={me}/>
            <About>
                    My name is Jasmine.
              <br/> I am currently studying a Bachelor of Engineering (Software), Diploma in Professional Practice
              <br/> At the University of Technology Sydney.
              <br/> I will graduate in May 2022.
              <br/> I am located in Sydney, Australia. (Willing to relocate)
              <br/> The highlight of my career has been interning for Google and Apple.
              <br/> I am most proud of my telemetry project.
              <br/> A challenge I enjoyed was the Microsoft protégé Competition (2020)
            </About>
          </TextBlock>
        </Body>
      </BrowserRouter>
    );
  }
}
