import React, { Component } from 'react';
import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';
import {BrowserRouter, Link} from 'react-router-dom';

const NavItem = styled.a`
  padding-right: 15px;
`;

export default class Menu extends Component {
  render() {
    return (
      <BrowserRouter>
      <Navbar expand="lg" sticky="top" bg="white">
          <Navbar.Brand as={Link} to="" >Jasmine Emanouel</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            <NavItem href="#about">About Me</NavItem>
            <NavItem href="#jobs" >Jobs</NavItem>
            <NavItem href="#projects">Projects</NavItem>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </BrowserRouter>
    );
  }
}
