import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter} from 'react-router-dom';
import '../App.css';
import Menu from '../components/Menu.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Socials from '../components/Socials.js'
// import homeGif from '../images/homeGif.gif';
import AboutMe from './about-me.js';
import Projects from './projects2.js';
import Jobs from './jobs.js';
import Academic from './academic.js';
import Research from './research.js';
import Leadership from './leadership.js';
import BoringHomePage from './boringHomePage.js';
import Teamwork from './teamwork.js';
import Future from './future.js';
/**
    CLOUDS: https://media.giphy.com/media/3o6EhOYMhOTANYgHMk/giphy.gif
    CARTOON: https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif //
    IT CROWD ON FIRE: https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif //
    IT CROWD THWOING COMPUTER: https://media.giphy.com/media/dlMIwDQAxXn1K/giphy.gif //
    RON SWANSON: https://media.giphy.com/media/wZmCr7odNxKP6/giphy.gif
*/
const Body = styled.body`
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 5%;
  // min-height: 80vh;
  overflow: hidden;
`;

// const FrontImage = styled.div`
//   margin-right: 5%;
//   width: 100%;
//   height: 90vh;
//   background-image: url(${homeGif});
//   background-repeat: no-repeat;
//   background-size: cover;
//   @media (max-width: 768px) {
//    background-position: center;
//   }
// `;

// const TextBlock = styled.div`
//   height: 100%;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;


// const Name = styled.h1`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-top: 1%;
//   margin-bottom: 1%;
// `;

/*
<FrontImage>
  <TextBlock>
    <div id="parent">
      My name is Jasmine Emanouel. Welcome to my website.
      <div id="border"></div>
    </div>
  </TextBlock>
</FrontImage>
</Body>
*/
export default class HomeAgain extends Component {
  render() {
    return (
      <BrowserRouter>
      <Menu/>
        <Body><BoringHomePage/></Body>
        <div id="about" style={{height: '56px', width: '100%'}}/>
        <Body>
          <AboutMe/>
        </Body>
        <div id="jobs" style={{height: '56px', width: '100%'}}/>
        <Body>
          <Jobs/>
        </Body>
        <div id="projects" style={{height: '56px', width: '100%'}}/>
        <Body>
          <Projects/>
        </Body>
        <div id="experiences" style={{height: '56px', width: '100%'}}/>
        <Body>
          <Academic/>
        </Body>
        <div id="research" style={{height: '56px', width: '100%'}}/>
        <Body>
          <Research/>
        </Body>
        <div id="leadership" style={{height: '56px', width: '100%'}}/>
        <Body>
          <Leadership/>
        </Body>
        <div id="teamwork" style={{height: '56px', width: '100%'}}/>
        <Body>
          <Teamwork/>
        </Body>
        <div id="future" style={{height: '56px', width: '100%'}}/>
        <Body>
          <Future/>
        </Body>
        <div style={{height: '0.01vh'}}/>
        <Socials/>
      </BrowserRouter>
    );
  }
}
