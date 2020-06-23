import React, { Component } from 'react';
import styled from 'styled-components';
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';
import email from '../images/email.svg';

const SocialComponent = styled.div`
  position: fixed;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  img {
    display: block;
    text-align: center;
    padding: 16px;
    transition: all 0.3s ease;
    color: white;
    font-size: 20px;
  }
`;

export default class Socials extends Component {
  render() {
    return (
      <SocialComponent>
        <a href="https://github.com/jasmine-nahrain"><img src={github} /></a>
        <a href="https://www.linkedin.com/in/jasmine-emanouel-aa57aa179/"><img src={linkedin} /></a>
        <a href="mailto: jasmine.nahrain@gmail.com"><img src={email} /></a>
      </SocialComponent>
    );
  }
}
