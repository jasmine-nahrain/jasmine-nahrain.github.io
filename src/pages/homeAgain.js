import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter} from 'react-router-dom';
import '../App.css';
import Menu from '../components/Menu.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Socials from '../components/Socials.js'
import createHistory from "history/createBrowserHistory";

var backgrounds = [
  'https://media.giphy.com/media/3o6EhOYMhOTANYgHMk/giphy.gif',
  'https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif',
  'https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif',
  'https://media.giphy.com/media/dlMIwDQAxXn1K/giphy.gif',
  'https://media.giphy.com/media/wZmCr7odNxKP6/giphy.gif'
];
const min = 0;
const max = backgrounds.length-1;
const url1 = backgrounds[Math.floor(Math.random()*(max-min+1)+min)];


const Body = styled.body`
  margin-left: 5%;
  margin-right: 5%;
`;

const FrontImage = styled.div`
  /* margin-left: 5%; */
  margin-right: 5%;
  width: 100%;
  height: 90vh;
  background-image: url('https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif');
  /*
    CLOUDS: https://media.giphy.com/media/3o6EhOYMhOTANYgHMk/giphy.gif
    CARTOON: https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif //
    IT CROWD ON FIRE: https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif //
    IT CROWD THWOING COMPUTER: https://media.giphy.com/media/dlMIwDQAxXn1K/giphy.gif //
    RON SWANSON: https://media.giphy.com/media/wZmCr7odNxKP6/giphy.gif*/
  background-repeat: no-repeat;
  background-size: cover;
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
`;

const Next = styled.a`
  text-align: baseline;
  float: right;
  color: black;
  margin-top: -30px;
  margin-right: -4%;
`;


export default class HomeAgain extends Component {
  constructor() {
super();
    console.log(backgrounds);
    console.log("'" + url1 + "'")
  }
  render() {
    return (
      <BrowserRouter history={createHistory({ basename: process.env.PUBLIC_URL })} basename={process.env.PUBLIC_URL}>
      <Menu/>
      <Body>
        <FrontImage>
          <TextBlock>
            <div id="parent">
                My name is Jasmine Emanouel. Welcome to my website.
              <div id="border"></div>
            </div>
          </TextBlock>
          <Next href='/about'><strong>🡆🡆🡆</strong></Next>
        </FrontImage>

      </Body>
      <Socials/>
      </BrowserRouter>
    );
  }
}
