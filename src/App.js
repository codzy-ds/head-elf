import React, { Component } from 'react';
import Header from './containers/header'
import Fortune from './containers/fortune/fortuneCtnr'
import Intro from './containers/intro'
import sideTree from '../public/pexels-photo-24228.jpg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
          <div className="side-bar">
            <img src={sideTree} className="side-image" alt="logo" />
          </div>
          <div className="main">
            <Fortune />
            <Intro />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
