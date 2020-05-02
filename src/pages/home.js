import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/header.js';
import {BrowserRouter} from 'react-router-dom';
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

export default class Home extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className="App" onScroll={this.onScroll}>
        <body className="App-body">
          <div class="stars"></div>
          <div class="twinkling"></div>
            <Body>
              <h1 >Hello, my name is Jasmine Emanouel</h1>
                <a href="/about-me" role="button" class="button"><b>About Me</b></a>
            </Body>
        </body>
      </div>
      </BrowserRouter>
    );
  }
}
