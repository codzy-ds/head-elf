import React, { Component } from 'react';
import Header from './containers/header'
import Fortune from './containers/fortune/fortuneCtnr'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Fortune />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
