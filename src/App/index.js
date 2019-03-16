import React, { Component } from 'react';
import Nav from './Nav'
import Board from './Board'
import Game from '../sample_game.json'
import './index.css';

class App extends Component {
  constructor(props) {
    super(props)
    
    this.newGame = this.newGame.bind(this);
    this.setCell = this.setCell.bind(this);
    
    this.state = {
      isLoading: false,
      error: null,
      game: {
        "state": null,
        "turn": null,
        "board": [
          [ "-", "-", "-" ],
          [ "-", "-", "-" ],
          [ "-", "-", "-" ]
        ],
        "winner": null,
        "x_total_wins": null,
        "y_total_wins": null
      }
    }
  }
  
  fetchGame() {
  }
  
  componentDidMount() {
    this.setState({ isLoading: true });
    console.log(this.state);
    
    fetch('http://localhost:3001/play')
      .then( response => response.json())
      .then(parsed => this.setState({ game: parsed, isLoading: false }))
      .catch(error => console.log('parsing failed', error));
  }
  
  newGame() {
    this.setState({
      game: Game
    });
  }
  
  setCell(e, indexOne, indexTwo, mark) {
    let newGameState = this.state.game;
    
    newGameState.board[indexOne][indexTwo] = mark;
    
    this.setState({
      game: newGameState
    });
  }
  
  render() {
    const { game, isLoading, error } = this.state;
    
    if(error) {
      return (
        <h1>ERROR</h1>
      )
    }
    else if(isLoading) {
      return (
        <div className="loading-container">
          <div className="loading"></div>
        </div>
      )
    }
    else {
      return (
        <div className="app-container">
          <Nav newGame={this.newGame} />
          
          <div className="turn-container">
            <h1>Current Turn: {game.turn}</h1>
          </div>
          
          <Board board={game.board} setCell={this.setCell} turn={game.turn}/>
        </div>
      );
    }
  }
}

export default App;
