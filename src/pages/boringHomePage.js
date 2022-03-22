import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
/**
    CLOUDS: https://media.giphy.com/media/3o6EhOYMhOTANYgHMk/giphy.gif
    CARTOON: https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif //
    IT CROWD ON FIRE: https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif //
    IT CROWD THWOING COMPUTER: https://media.giphy.com/media/dlMIwDQAxXn1K/giphy.gif //
    RON SWANSON: https://media.giphy.com/media/wZmCr7odNxKP6/giphy.gif
*/
/*
<TextBlock>
  <div id="parent">
    My name is Jasmine Emanouel. Welcome to my website.
    <div id="border"></div>
  </div>
</TextBlock>

<div class="homepage">
  <div class="home-right-bg">
    <h1 class="home-name-right"><b>Jasmine Emanouel</b></h1>
    <br/>
    <h2>Software Engineer based in Sydney, Australia</h2>
    <br/>
    <h3>I use software to make the world a better place</h3>
  </div>
</div>
*/

export default class BoringHomePage extends Component {
  render() {
    return (
      <div class="homepage">
        <div class="home-right-bg">
          <h1 class="line-1 anim-typewriter"><b>Jasmine Emanouel</b></h1>
          <br/>
          <h2>Software Engineer based in Sydney, Australia</h2>
          <br/>
          <h3>I use software to make the world a better place</h3>
        </div>
      </div>
    );
  }
}
