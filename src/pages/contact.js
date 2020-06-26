import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter} from 'react-router-dom';
import '../App.css';
import Menu from '../components/Menu.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Socials from '../components/Socials.js'

const Body = styled.body`
  margin: 5%;
  padding: 5%;
  background-color: rgb(230,230,230);
`;

const Prev = styled.a`
  text-align: baseline;
  float: left;
  color: black;
  margin-left: 4%;
  margin-top: 1.5%;
`;

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.setState({
      name: '',
      subject: '',
      content: '',
    })

  }

  onSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <BrowserRouter>
        <Menu/>
        <Body>
          <form data-netlify="true">
            <div class="form-group">
              <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Name" aria-describedby="emailHelp"  />
            </div>
            <div class="form-group">
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp"  />
            </div>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Subject" id="exampleInputPassword1" />
            </div>
            <div class="form-group">
              <textarea type="textarea" class="form-control" placeholder="Content" id="exampleInputPassword1" />
            </div>
            <button type="submit" class="btn btn-outline-dark" style={{width: '100%'}}>Submit</button>
          </form>
        </Body>
        <Socials/>
        <div style={{width: '100%', height: '10vh'}}>
          <Prev href='/project'><strong>🡄🡄🡄</strong></Prev>
        </div>
      </BrowserRouter>
    );
  }
}
