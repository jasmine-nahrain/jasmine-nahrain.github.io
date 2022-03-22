/*
 * Leadership
 */

import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Future extends Component {

  render() {

    return (
      <BrowserRouter>
      <div class="academic">
          <div class="academic-container"
            style={{marginBottom: "1%", backgroundColor: "#383838", textAlign: 'center', marginLeft: '15%', marginRight: '15%'}}>
            <div className="academic-content">
              <p className="academic-overline"></p>
              <h2 className="academic-title" style={{color: "#d995f6"}}> Where to from here</h2>
              <div className="academic-description" style={{color: 'white', paddingLeft: '10%', paddingRight: '10%'}}>
              <p>I have had an exciting career so far. From interning at amazing
              companies to incredible competitions to being at university, I
              am beyond happy with my progress.
              </p><p>
              I want to keep this momentum going into a graduate role where I
              can refine my skills and become a rounded engineer. I will
              continue the development of my career working at <b>Apple</b> as a
              graduate engineer.</p>
              </div>
              </div>
              </div>
        </div>
      </BrowserRouter>
    );
  }
}
