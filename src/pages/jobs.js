/*
 * a summary of professional capabilities (key technical and transferable skills)
 */

import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter} from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import jobs from './jobs.json';
import github from '../images/github.svg';
import {FiGithub} from 'react-icons/fi';

const StyledProject = styled.div`
padding-top: 10%;
  display: flex;
  -webkit-box-align: center;
  background-color: black;
  padding-bottom: 5%;
  color: white;
  min-height: 80vh;

`;

export default class Jobs extends Component {

  constructor(props) {
    super(props);
       this.state = {
         activeTabId: 0,
         length: jobs.length,
       };
  }

  setActiveTab(id) {
      this.setState({activeTabId: id});
      console.log(id);
  }

  render() {

    return (
      <BrowserRouter>
      <h1>Work Experience</h1>
      <StyledProject>
      <div class="side-panel">
        <ul aria-label="jobs-list" class="job-list">
          {jobs.map((info, i) =>
            <div key={i}>
            <div aria-label="scroll-bar" class="scroll-bar" style={{'backgroundColor': this.state.activeTabId === info.id ? 'green' : 'white'}}/>
              <ul role="tablist" aria-label="Job tabs" class="job-tabs">
                <li>
                  <button className={this.state.activeTabId === info.id ? 'job-button-active' : 'job-button'} isActive={this.state.activeTabId} onClick={() => this.setActiveTab(info.id)}>{info.company}</button>
                </li>
              </ul>
            </div>
          )}

          </ul>
          </div>
          <div aria-label="job-description" class="job-description">
            {jobs.map((info, i) =>
              this.state.activeTabId == info.id ?
                <div key={i} >
                <h3>
                  <span>{info.title}</span>
                  <span class="company">@<a href={info.companylink}>{info.company}</a></span>
                </h3>
                <p aria-label="job-duration" class="job-duration">{info.range}</p>
                <div aria-label="job-description">
                  {info.technologies.length > 0 ? <p><strong>Technologies</strong></p> : null}
                  <ul>
                    {info.technologies.map((info, j) =>
                      <span key={j}>{info}</span>
                    )}
                  </ul>
                  <br/>
                  <p><strong>Role</strong></p>
                  <p>{info.description}</p>
                  <ul>
                    {info.jobpoints.map((info, j) =>
                      <li key={j}>{info}</li>
                    )}
                  </ul>
                </div>
              </div>
             : null
            )}
          </div>
        </StyledProject>
      </BrowserRouter>
    );
  }
}
