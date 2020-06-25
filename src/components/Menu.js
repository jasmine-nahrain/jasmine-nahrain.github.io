import React, { Component } from 'react';
import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';
import {BrowserRouter} from 'react-router-dom';

const NavItem = styled.a`
  padding-right: 15px;
`;

export default class Menu extends Component {
  render() {
    return (
      <BrowserRouter>
      <Navbar expand="lg">
          <Navbar.Brand href="/">Jasmine Emanouel</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <NavItem href="/about" >About Me</NavItem>
              <NavItem href="/project">Projects</NavItem>
              <NavItem href="/contact">Contact</NavItem>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </BrowserRouter>
    );
  }
}
