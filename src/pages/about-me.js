import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter} from 'react-router-dom';
import '../App.css';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import resume from '../images/resume.pdf';
import Socials from '../components/Socials.js'
import Menu from '../components/Menu.js'

const Body = styled.body`
  padding-left: 5%;
  padding-right: 5%;
  min-height: 10vh;
  width: 100%;
  background-color: rgb(230,230,230);
`;

const FrontImage = styled.div`
  /* margin-left: 5%; */
  margin-right: 5%;
  width: 100%;
  height: 80vh;
  /* background-image: url('https://media.giphy.com/media/3o6EhOYMhOTANYgHMk/giphy.gif'); */
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
`;

const Title = styled.h1`
    font-size: 15vh;
    color: rgba(255,255,255,0.9);
    text-align: center;
    vertical-align: center;
    padding: 15% 0;
`;

const TextBlock = styled.div`
height: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-flow: row;
display: flex;
`;

const SideBar = styled.img`
flex-grow: 1;
height: 60vh;
@media(max-width: 500px) {
  display: none;
}
`;

const About = styled.div`
height: 100%;
width: 100%;
float: right;
display: flex;
align-items: center;
justify-content: center;
text-align: left;
@media(max-width: 750px) {
  padding: 5%;
}
`;
const Next = styled.a`
  text-align: baseline;
  float: right;
  color: black;
  margin-right: 4%;
  margin-top: 1.5%;
  /* position: absolute; */
`;

const Prev = styled.a`
  text-align: baseline;
  float: left;
  color: black;
  margin-left: 4%;
  margin-top: 1.5%;
  /* position: absolute; */
`;

export default class HomeAgain extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu/>

      <Body>
          <TextBlock>
            <SideBar src='https://media.giphy.com/media/Y0Q0sOrQwKdMj74244/giphy.gif'/>
            <About>
                    My name is Jasmine.
              <br/> I am currently studying a Bachelor of Engineering (Software), Diploma in Professional Practice
              <br/> At the University of Technology Sydney.
              <br/> I will graduate in March 2023.
              <br/> I am located in Sydney, Australia. (Willing to relocate)
              <br/> My favourite language is Java.
              <br/> The highlight of my career has been interning for Google.
              <br/> I am most proud of my telemetry project.
              <br/> A challenge I enjoyed was the Microsoft protégé Competition (2020)
            </About>
          </TextBlock>
          <TextBlock>
            <About style={{flexFlow: 'column'}}>
                <h5><a href={resume} download>Download My Resume</a></h5>
            </About>
          </TextBlock>
      </Body>
      <Socials/>
      <div style={{width: '100%', height: '10vh', backgroundColor: 'rgb(230,230,230)'}}>
        <Prev href='/'><strong>🡄🡄🡄</strong></Prev>
        <Next href='/project'><strong>🡆🡆🡆</strong></Next>
      </div>


      </BrowserRouter>
    );
  }
}
