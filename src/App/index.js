import React, { Component } from 'react';
import Nav from './Nav';
import Board from './Board';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props)
    
    this.newGame = this.newGame.bind(this);
    this.setCell = this.setCell.bind(this);
    
    var localStorageGame = localStorage.getItem( 'tic-tac-toe-gameId' );
    
    this.state = {
      isLoading: true,
      error: null,
      gameId: localStorageGame,
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
  
  fetchGame( forceNewGame ) {
    this.setState( { isLoading: true, error: null } );
    
    let apiUrl = process.env.REACT_APP_API_URL;
    
    if( this.state.gameId && !forceNewGame ) {
      apiUrl += "/games/" + this.state.gameId;
    }
    else {
      apiUrl += "/new_game";
    }
    
    fetch( apiUrl )
      .then( response => response.json() )
      .then( parsed => {
        if( parsed.error ) {
          this.setState( { error: true } );
        }
        else {
          this.setState(
            { 
              game: parsed, 
              isLoading: false 
            }
          ); 
          
          localStorage.setItem( "tic-tac-toe-gameId", parsed.id );
        }
      } )
      .catch( error => {
        this.setState( { error: true } );
        
        console.log( "parsing failed", error ); 
      } );
  }
  
  currentMessage() {
    if( this.state.game.winner ) {
      return this.state.game.winner === "draw" ? 
             `Game is a draw.` : 
             `${ this.state.game.winner } Wins The Game!`;
    }
    else {
      return `Current Turn: ${ this.state.game.turn }`;
    }
  }
  
  updateGame( newGameState ) {
    let apiUrl = process.env.REACT_APP_API_URL + "/games/" + newGameState.id;
    const reqBody = JSON.stringify( { game: newGameState } )
    
    fetch( apiUrl, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: reqBody
    } )
      .then( response => response.json() )
      .then( parsed => {
        if( parsed.error ) {
          this.setState( { error: true } );
        }
        else {
          this.setState( { game: parsed } );
        }
      })
      .catch( error => {
        this.setState( { error: true } );
        
        console.log( "parsing failed", error );
      } );
  }
  
  componentDidMount() {
    this.fetchGame();
  }
  
  newGame() {
    this.fetchGame( true );
  }
  
  setCell(e, indexOne, indexTwo, mark) {
    let newGameState = this.state.game;
    
    newGameState.board[indexOne][indexTwo] = mark;
    
    this.updateGame( newGameState );
  }
  
  render() {
    const { game, isLoading, error } = this.state;
    
    if(error) {
      return (
        <div className="error-container">
          <h1>ERROR</h1>
          <button onClick={ this.newGame }>New Game</button>
        </div>
      )
    }
    else if(isLoading) {
      return (
        <div className={ "loading-container" + ( game.turn === "O" ? " red-background" : "" ) }>
          <div className="loading"></div>
        </div>
      )
    }
    else {
      return (
        <div className={ "app-container" + ( game.turn === "O" ? " red-background" : "" ) }>
          <Nav newGame={ this.newGame } />
          
          <div className="turn-container">
            <h1>{ this.currentMessage() }</h1>
          </div>
          
          <Board game={ game } setCell={ this.setCell }/>
          
          <div className={ "win-totals-container" + ( game.winner ? "" : " hidden" ) }>
            <h2>Overall Wins</h2>
          </div>
        </div>
      );
    }
  }
}

export default App;
