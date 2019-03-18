import React, { Component } from 'react';
import Cell from '../Cell';
import './index.css';

class Column extends Component {
  noop() {};
  
  setCell( game, group, setCell ) {
    return game.board[ group[ 1 ] ][ group[ 2 ] ] === "-" && !game.winner ? setCell : this.noop
  };
  
  render() {
    const {
      game,
      setCell,
      groupArray
    } = this.props;
    
    return (
        <div className="column">
          {
            groupArray.map( ( group ) => {
              return <Cell board={ game.board } 
                           turn={ game.turn } 
                           setCell={ this.setCell( game, group, setCell ) } 
                           cellNumber={ group[ 0 ] } 
                           indexOne={ group[ 1 ] } 
                           indexTwo={ group[ 2 ] }/>
            } )
          }
        </div>
    );
  }
}

export default Column;
