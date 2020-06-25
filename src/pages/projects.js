import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter} from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import tel from '../images/tel.png';
import tel2 from '../images/tel2.png';
import quantum from '../images/quantum.PNG';
import quantum2 from '../images/quantum2.PNG';
import Socials from '../components/Socials.js'
import Menu from '../components/Menu.js'
import projectGif from '../images/projectsGif.gif';

const Body = styled.body`
  padding: 5%;
  min-height: 10vh;
  width: 100%;
  background-color: rgb(51,51,51);
  color: rgb(230,230,230);
`;

const Title = styled.h1`
  text-align: center;
  vertical-align: center;
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
  flex-flow: column;
  display: flex;
`;

const Next = styled.a`
  text-align: baseline;
  float: right;
  color: black;
  margin-right: 4%;
  margin-top: 1.5%;
`;

const Prev = styled.a`
  text-align: baseline;
  float: left;
  color: black;
  margin-left: 4%;
  margin-top: 1.5%;
`;

  export default class Project extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <Body>
          <TextBlock>
            <SideBar src={projectGif}/>
            <About>
              <Title>Telemetry</Title>
              Goal: Connect a student made racecar to this telemetry program to
                    monitor the car (live) throughout a race.
              <br/> Tech Stack: Javascript, NodeJS, HTML, CSS, Bootstrap
              <div style={{flexFlow: 'column'}}>
              <img src={tel} width='50%' alt="telemetry prgram 1" style={{padding: '20px'}}/>
              <img src={tel2} width='50%' alt="telemetry prgram 2" style={{padding: '20px'}}/>
              </div>
            </About>
          </TextBlock>
        </Body>
        <Body style={{backgroundColor: '#fff', color: '#333333'}}>
          <TextBlock>
            <About>
              <Title>Qantum Computing</Title>
              Goal: Develop a website where students can make a quantum algorithm
              and submit it so the teacher can mark it.
              <br/> Tech Stack: Frontend: ReactJS, Bootstrap, React-beautiful-dnd
              Backend: python
              <img src={quantum} width='50%' alt="quantum prgram 1" style={{paddingTop: '2%', borderTop: '2px', borderLeft: '2px', borderRight: '2px'}} />
              <img src={quantum2} width='50%' alt="quantum prgram 2"/>
            </About>
          </TextBlock>
        </Body>
        <Socials/>
        <div style={{width: '100%', height: '10vh', backgroundColor: 'rgb(230,230,230)'}}>
          <Prev href='/about' style={{flexGrow: '1'}}><strong>🡄🡄🡄</strong></Prev>
          <Next href='/contact' style={{flexGrow: '1'}}><strong>🡆🡆🡆</strong></Next>
        </div>
      </div>
    );
  }
}
