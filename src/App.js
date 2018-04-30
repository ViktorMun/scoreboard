import React, { Component } from 'react'
import Board from './containers/Board'
import './App.css'

export const players = [
  { id: 1, name: 'Deloitte', score: 0 },
  { id: 2, name: 'KPMG', score: 0 },
  { id: 3, name: 'NRC', score: 0 },
  { id: 4, name: 'AlbertHejn', score: 0 },
  { id: 5, name: 'Puma', score: 0 },
  { id: 6, name: 'Nike', score: 0 }
]

class App extends Component {
  state = { players }

  updatePlayer = (playerId, updates) => {
    this.setState({
      players: this.state.players.map((player) => {
        if (player.id !== playerId) return player
        return { ...player, ...updates }
      })
    })
  }
// As score can now change, pass players as
// state not as a prop

  render() {
    return (
        <div className="App">
        <Board
  players={this.state.players}
  updatePlayer={this.updatePlayer}
/>
        </div>

    )
  }
}

export default App
