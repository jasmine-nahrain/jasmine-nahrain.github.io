import React, { Component } from 'react';
import styled from 'styled-components';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import tel from '../images/tel.png';
import tel2 from '../images/tel2.png';
import quantum from '../images/quantum.PNG';
import quantum2 from '../images/quantum2.PNG';
import Socials from '../components/Socials.js'
import Menu from '../components/Menu.js'
// import projectGif from '../images/projectsGif.gif';

const Body = styled.body`
  padding: 5%;
  min-height: 10vh;
  width: 100%;
  background-color: rgb(230,230,230);
  color: rgb(51,51,51);
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

// const SideBar = styled.img`
//   flex-grow: 1;
//   height: 60vh;
//   @media(max-width: 500px) {
//     display: none;
//   }
// `;

const About = styled.div`
  height: 100%;
  width: 100%;
  margin: 5%;
  margin-left: 15%;
  margin-right: 15%;
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  flex-flow: column;
  display: flex;
`;

// const Next = styled.a`
//   text-align: baseline;
//   float: right;
//   color: black;
//   margin-right: 4%;
//   margin-top: 1.5%;
// `;

const Prev = styled.a`
  text-align: baseline;
  float: left;
  color: black;
  margin-left: 4%;
  margin-top: 1.5%;
`;

const Image = styled.img`
  margin-top: 2%;
  border: 5px solid black;
  width: 46%;
  margin-left: 10px;
  @media(max-width: 750px) {
    width: 100%;
  }
`;

  export default class Project extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <Body>
          <TextBlock>
            <About>
              <Title>Telemetry</Title>
              Goal: Connect a student made racecar to this telemetry program to
                    monitor the car (live) throughout a race.
              <br/> Tech Stack: Javascript, NodeJS, HTML, CSS, Bootstrap
              <br/> What I loved about this project was creating something technical for the motorsports team,
              something which is very masculine and making it asethically pleasing. Up until this point,
              all software had no ui design which I thought was a shame. The easy-to-intereprete
              nature of this program was able to increase the efficiency of the program and further
              validate the need the team had for it.
              <div style={{flexFlow: 'column'}}>
              <Image src={tel} alt="telemetry prgram 1" />
              <Image src={tel2} alt="telemetry prgram 2" />
              </div>
            </About>
          </TextBlock>
        </Body>
        <Body style={{backgroundColor: '#fff', color: '#333333'}}>
          <TextBlock>
            <About>
              <Title>Qantum Computing</Title>
              <div>
              <b>Goal:</b> Develop a website where students can make a quantum algorithm
              and submit it so the teacher can mark it.
              <br/> <b>Tech Stack:</b> Frontend: ReactJS, Bootstrap, React-beautiful-dnd
              Backend: python
              <br/><br/>This project was a part of a university class I took. As a team, we developed
              this program to facilitate the teaching of quantum computing at the university.
              I was the front-end lead and was responsible for developing the main drag-and-drop
              component. This was done using the
              <a href="https://github.com/atlassian/react-beautiful-dnd">react-beautiful-dnd</a>
              library which worked perfectly for this purpose.
              </div>
              <Image src={quantum} alt="quantum prgram 1" style={{borderBottom: '5px'}}/>
              <Image src={quantum2} alt="quantum prgram 2" style={{marginTop: '0px', borderTop: '0px'}}/>
            </About>
          </TextBlock>
        </Body>
        <Socials/>
        <div style={{width: '100%', height: '10vh', backgroundColor: 'rgb(230,230,230)'}}>
          <Prev href='/about' style={{flexGrow: '1'}}><strong>🡄🡄🡄</strong></Prev>
        </div>
      </div>
    );
  }
}
