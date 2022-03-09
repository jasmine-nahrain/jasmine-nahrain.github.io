/*
 *  A summary of professional capabilities (key technical and transferable skills)
 */

import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter} from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import resume from '../images/Jasmine Emanouel Resume.pdf';

const Body = styled.div`
  background-color: rgb(230,230,230);
  height: 100%;
  weight: 100%;
`;

export default class Professional extends Component {
  render() {
    return (
      <BrowserRouter>
        <Body>

        </Body>
      </BrowserRouter>
    );
  }
}
