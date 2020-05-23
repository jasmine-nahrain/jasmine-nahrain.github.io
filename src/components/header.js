import React, { Component } from 'react';
import styled from 'styled-components';
import linkedin from '../images/linkedin.svg';
import instagram from '../images/instagram.svg';
import facebook from '../images/facebook.svg';
import signs from '../images/signs.svg';
import {BrowserRouter} from 'react-router-dom';
import AboutMe from '../pages/about-me.js';

const Header = styled.header`
  padding-top: 1%;
  padding-left: 2%;
`;


const Title = styled.h1`
  float: left;
  color: white;
`;

const Icons = styled.div`
  float: right;
  margin: 8px;
`;

// <Header>
//   <Title>Jasmine Emanouel</Title>
//   <Icons>
//     <img src={linkedin} />
//     <img src={instagram} />
//     <img src={facebook} />
//     <img src={signs} />
//   </Icons>
// </Header>

/**
<header class="header" style={{margin: '2rem'}}>
  <p class="logo" style={{float: 'left', color: 'black'}}>Jasmine Emanouel</p>
  <nav class="menu" style={{float: 'right'}}>
    <a href="#middle" style={{paddingRight: '1rem', color: 'black'}}>About</a>
    <a href="#bottom" style={{paddingRight: '1rem', color: 'black'}}>Experience</a>
    <a href="#" style={{paddingRight: '1rem', color: 'black'}}>Contact</a>
  </nav>
</header>
*/


export default class Home extends Component {
  render() {
    return (
        <BrowserRouter>
        <header class="header" style={{margin: '2rem'}}>
          <nav id="navbar-example2" class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">Jasmine Emanouel</a>
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a class="nav-link" href="#middle">About Me</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#middle">Experience</a>
              </li>
            </ul>
          </nav>
          </header>
        </BrowserRouter>
    );
  }
}
