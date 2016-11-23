import React, { Component } from 'react';
import Header from './containers/header';
import TopMenu from './components/menu/topMenu'
import './App.css';
import 'react-select/dist/react-select.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TopMenu />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
