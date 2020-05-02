import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/header.js';

const Body = styled.header`
    position: absolute;
    color: white;
    background-color: transparent;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

/**
  CREDITS:
    Stars and twinkling background: https://codepen.io/WebSonick/pen/vjmgu
*/

export default class AboutMe extends Component {

  render() {
    return (
      <div className="AboutMe" >
        <body className="App-body">
        <div class="stars"></div>
        <div class="twinkling"></div>
            <Body>
              <h1 >I am a software developer</h1>
              <a href="/" role="button" class="button"><b>Home</b></a>
            </Body>
        </body>
      </div>
    );
  }
}
