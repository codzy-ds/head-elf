import React, { Component } from 'react';
import Header from './containers/header'
import './App.css';

class App extends Component {
  render() {
    console.log(this.props.children)
    return (
      <div className="App">
        <Header />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
