import React, { Component } from 'react';
import styled from 'styled-components';
import { Navbar, Button } from 'react-bootstrap';
import {BrowserRouter, Link} from 'react-router-dom';
import resume from '../images/Jasmine Emanouel Resume.pdf';

const NavItem = styled.a`
  padding-right: 15px;
`;

export default class Menu extends Component {
  render() {
    return (
      <BrowserRouter>
      <Navbar expand="lg" sticky="top" bg="white">
          <Navbar.Brand href="#home" >Jasmine Emanouel</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            <NavItem href="#about">About Me</NavItem>
            <NavItem href="#jobs" >Jobs</NavItem>
            <NavItem href="#projects">Projects</NavItem>
            <NavItem href="#experiences">Experiences</NavItem>
            <NavItem href="#research">Research</NavItem>
            </Navbar.Text>
            <a role="button" href={resume} target="_blank"><Button variant="outline-dark">Resume</Button></a>
          </Navbar.Collapse>
        </Navbar>
      </BrowserRouter>
    );
  }
}
