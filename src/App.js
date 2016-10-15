import React, { Component } from 'react';
import Header from './containers/header'
import Fortune from './containers/fortune/fortuneCtnr'
import Intro from './containers/body/intro'
import ChristmasTree from './components/christmasTree'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
          <div className="side-bar">
            <ChristmasTree />
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
