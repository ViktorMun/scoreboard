import React, { PureComponent } from 'react'
import Title from '../components/Title'
import Player from '../components/Player'
import './Board.css'

export default class Board extends PureComponent {
  render() {
    const { players } = this.props

    return (
      <div>
        <Title content="Scoreboard" />
        <ul className="Board">
          {players.sort((p1,p2) => (p2.score - p1.score))
            .map((player, index) => (
            <Player key={index} { ...player } />
          ))}
        </ul>
      </div>
    )
  }
}
