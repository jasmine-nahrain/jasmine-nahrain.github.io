import React, { Component } from 'react';
import styled from 'styled-components';
import linkedin from '../images/linkedin.svg';
import instagram from '../images/instagram.svg';
import facebook from '../images/facebook.svg';
import signs from '../images/signs.svg';

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


export default class Home extends Component {
  render() {
    return (
      <header class="header">
        <p class="logo">Jasmine Emanouel</p>
        <nav class="menu">
          <a href="#">About</a>
          <a href="#">Gallery</a>
          <a href="#">Contact</a>
        </nav>
    </header>
    );
  }
}
