import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter} from 'react-router-dom';
import '../App.css';
import down from '../images/down.svg';

const Body = styled.header`
    position: absolute;
    color: white;
    background-color: transparent;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
`;
const App = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  margin: 2em auto 0;
  font: 700 3em "Poppins", sans-serif;
  color: #f1f5f6;
  text-align: center;
`;
const Name = styled.div`
 font-size: 8vw;
 text-shadow: 4px 4px 0px #bf00ff;
 mix-blend-mode: screen;
 animation: fadeIn 2.5s linear forwards;
 text-align: center;
`;

const Points = styled.h3`
  text-align: center;
`;

const Footer = styled.footer`
  position : absolute;
  bottom : 0;
  background-color: transparent;
`;



/**
  CREDITS:
    Stars and twinkling background: https://codepen.io/WebSonick/pen/vjmgu
*/

export default class Home extends Component {

  render() {
    return (
      <BrowserRouter>
        <App>
          <body>
            <div class="stars"></div>
            <div class="twinkling"></div>
              <Body>
                <Title >Hello, my name is </Title>
                <Name>Jasmine</Name>
                <Points>Developer ● Student ● Something</Points>
              </Body>
              <Footer>
                <div class="arrow bounce">
                  <a href='#middle'><img src={down} /></a>
                </div>
              </Footer>
          </body>
        </App>
      </BrowserRouter>
    );
  }
}
