import React, { Component } from 'react'
import Title from './components/Title'
import './App.css'
import Player from './components/Player'

const players = [
  { id: 1, name: 'Deloitte', score: 4 },
  { id: 2, name: 'PWC', score: 6 },
  { id: 3, name: 'ERC', score: 3 },
  { id: 4, name: 'IBM', score: 4 },
  { id: 5, name: 'Microsoft', score: 5 }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title content="Scoreboard" />
        <ul>
          {players.map((player, index) => <Player key={index} { ...player } />)}
        </ul>
      </div>
    )
  }
}

export default App
