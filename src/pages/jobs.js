/*
 * a summary of professional capabilities (key technical and transferable skills)
 */

import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import jobs from './jobs.json';
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
      <div class="jobs-container">
      <div class="side-panel">
        <ul aria-label="jobs-list" class="job-list">
          {jobs.map((info, i) =>
            <div key={i}>
            <div aria-label="scroll-bar" class="scroll-bar" style={{'backgroundColor': this.state.activeTabId === info.id ? 'green' : 'white'}}/>
              <ul role="tablist" aria-label="Job tabs" class="job-tabs">
                <li>
                  <button className={this.state.activeTabId === info.id ? 'job-button-active' : 'job-button'} isActive={this.state.activeTabId} onClick={() => this.setActiveTab(info.id)}>{info.title}@{info.company}</button>
                </li>
              </ul>
            </div>
          )}
          </ul>
          </div>
          <div aria-label="job-description" class="job-description">
            {jobs.map((info, i) =>
              this.state.activeTabId === info.id ?
                <div key={i} >
                <h3>
                  <span>{info.title}</span>
                  <span class="company">@<a href={info.companylink}>{info.company}</a></span>
                </h3>
                <i><p aria-label="job-duration" class="job-duration">{info.range}</p></i>
                <div aria-label="job-description">
                  <p>
                  {info.technologies.length > 0 ? <span><br/><strong>Technologies: </strong></span> : null}
                    {info.technologies.map((info, j) =>
                      <span key={j}>{info}</span>
                    )}
                  </p>
                  <br/>
                  <p><strong>Role</strong></p>
                  <p>{info.description}</p>
                  <ul>
                    {info.jobpoints.map((info, j) =>
                      <li key={j}>{info}</li>
                    )}
                  </ul>
                </div>
                <br/>
                {info.reference ?
                  <div>
                <h4>Reference</h4>
                <p>{info.reference}</p>
                <p><i>-{info.referenceperson}</i></p>
                </div>
                 : ""}

              </div>
             : null
            )}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
