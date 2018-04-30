import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Scoreboard</h2>
        </div>
       <Title content="Hello, World"/>
      </div>

    );
  }
}

export default App;
