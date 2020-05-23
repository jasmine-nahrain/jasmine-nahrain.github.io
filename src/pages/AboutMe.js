import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter} from 'react-router-dom';
import '../App.css';
import down from '../images/down.svg';
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';

const App = styled.div`
  overflow: hidden;
  /* background-image: url('https://includingyou.com.au/wp-content/uploads/2014/05/marble-background.jpg'); */
`;

const Background = styled.div`
  text-align: center;
  width: 100%;
  height: 100vh;
`;
const Body = styled.div`
    position: absolute;
    color: black;
    background-image: url('https://media.giphy.com/media/3o6EhOYMhOTANYgHMk/giphy.gif');
    background-repeat: no-repeat;
    background-size: cover;
    /* border: 10px solid black; */
    margin: 1%;
    height: 95.5%;
    width: 98%;
`;

const Body2 = styled.div`
    position: absolute;
    color: black;
    background-image: url('https://media.giphy.com/media/5HK4TiiBeLSZq/giphy.gif');
    background-repeat: no-repeat;
    background-size: cover;
    /* border: 10px solid black; */
    margin: 1%;
    height: 95.5%;
    width: 98%;
`;

const Window = styled.div`
  background-color: rgba(255,255,255, 1);
  width: 30%;
  height: 100%;
  left: 4em;
  position: absolute;
`;
const Title = styled.h1`
  margin: .3em;
  background-color: black;
  font: 3em "Source Code Pro", sans-serif;
  color: #fff;
`;

const SideText = styled.h1`

`;

const TextBlock = styled.div`
height: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`;

const Points = styled.h3`
  text-align: center;
`;

const Paragraph = styled.p`
  text-align: left;
  vertical-align: top;
  margin: 1rem;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  background-color: transparent;
`;



export default class About extends Component {

  render() {
    return (
      <BrowserRouter>
        <App>
          <Background>
            <Body>
              <TextBlock>
                <div id="parent">
                  My name is Jasmine Emanouel. Welcome to my website.
                  <div id="border"></div>
                </div>
              </TextBlock>
            </Body>
            <Footer>
              <div class="arrow bounce">
                <a href=''><img src={down} /></a>
              </div>
            </Footer>
          </Background>
          <Background>
            <Body2>
            <Window>
              <Title> About Me </Title>
                <Paragraph>
                  <table>
                  <tr>
                    <th style={{width: '30%'}}></th>
                    <th style={{width: '80%'}}></th>
                  </tr>
                  <tr>
                    <td><b>Name</b></td>
                    <td style={{padding: '10px'}}>Jasmine Emanouel</td>
                  </tr>
                  <tr>
                    <td><b>Location</b></td>
                    <td style={{padding: '10px'}}>Sydney, Australia</td>
                  </tr>
                  <tr>
                    <td><b>Degree</b></td>
                    <td style={{padding: '10px'}}>Bachelor of Engineering (Software), Diploma of Professional Practice</td>
                  </tr>
                  <tr>
                    <td><b>University</b></td>
                    <td style={{padding: '10px'}}>University of Technology Sydney</td>
                  </tr>
                  <tr>
                    <td><b>Graduation</b></td>
                    <td style={{padding: '10px'}}>March, 2023</td>
                  </tr>
                  <tr>
                    <td><b>Favourite Languages</b></td>
                    <td style={{padding: '10px'}}>
                      <li>Java</li>
                      <li>Android</li>
                      <li>Javascript incl. ReactJS</li>
                    </td>
                  </tr>
                  <tr>
                    <td><b>Highlights</b></td>
                    <td style={{padding: '10px'}}>
                    <li>Interning for Google</li>
                    <li>Designing and developing several websites (utsmotorsports.com, amit.com.au, mobility1.com.au)</li>
                    <li>Building two telemetry programs for the UTS Motorsports team</li>
                    <li>Competing (& winning) the 2019 Google case competition</li>
                    <li>Placing in the top 16 teams for the Microsoft protege competition</li>
                    </td>
                  </tr>
                  <tr>
                    <td><b>Hobbies</b></td>
                    <td style={{padding: '10px'}}>
                      <li>TV Shows</li>
                      <li>Netball</li>
                      <li>AFL</li>
                    </td>
                  </tr>
                  </table>
                </Paragraph>
                <Footer>
                <a href="https://github.com/jasmine-nahrain" style={{margin: '.5rem'}}><img src={github} /></a>
                <a href="https://www.linkedin.com/in/jasmine-emanouel-aa57aa179/" style={{margin: '.5rem'}}><img src={linkedin} /></a>
                </Footer>
            </Window>
            </Body2>
          </Background>
        </App>
      </BrowserRouter>
    );
  }
}
