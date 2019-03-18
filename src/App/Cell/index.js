import React, { Component } from 'react';
import './index.css';

class Cell extends Component {
  render() {
    const { 
      cellNumber, 
      indexOne, 
      indexTwo, 
      setCell,
      board,
      turn
    } = this.props;
    
    const mark = board[ indexOne ][ indexTwo ];
      
    return (
      <div className={ `cell cell-${ cellNumber }` } 
           onClick={ ( e ) => setCell( e, indexOne, indexTwo, turn ) }>
        { mark === "-" ? "" : mark }
      </div>
    );
  }
}

export default Cell;
