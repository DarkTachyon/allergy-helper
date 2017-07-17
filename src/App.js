import React, { Component } from 'react';
import './App.css';
import Body from './Body'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Allergy Helper</h1>
        </div>
        <div className="App-Body">
            <Body />
        </div>
      </div>
    );
  }
}

export default App;
