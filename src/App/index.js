import React, { Component } from 'react';
import Nav from './Nav'
import Board from './Board'
import Game from '../sample_game.json'
import './index.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav game={Game} />
        
        <Board />
      </div>
    );
  }
}

export default App;
