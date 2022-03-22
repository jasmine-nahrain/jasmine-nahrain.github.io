/*
 * Research
 */

import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Research extends Component {

  render() {

    return (
      <BrowserRouter>
      <h1>Research</h1>
        <div class="research">
          <h1><i>"How can machine learning (ML) be leveraged to predict the occurrence and trajectory of bushfires?"</i></h1>
          <div class="research-content">
            Bushfires have been an integral part of Australia throughout all of
            history. They have shaped the land we see today through regeneration
            however have caused catastrophic destruction. In the twenty-first
            century, bushfires have been worsening due to the effects of
            climate change (Dunne, 2020). Reduced rainfall, increasing
            temperatures and more volatile weather creating the breeding ground
            for some of the worst fires in history.
            <br/><br/>
              I will be completing my capstone research project in 2022. My
              research explores how machine learning can be leveraged to predict
              when a bushfire may occur. Weather characteristics of a fire from
              the smouldering phase will be considered and data will be collected
              historically.
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
