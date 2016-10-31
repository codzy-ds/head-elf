import React, { Component } from 'react';
import Header from './containers/header'
import './App.css';
import 'react-select/dist/react-select.css';

class App extends Component {
  render() {
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
