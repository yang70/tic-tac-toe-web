import React, { Component } from 'react';
import './index.css';

class Board extends Component {
  render() {
    const { 
      cellNumber, 
      indexOne, 
      indexTwo, 
      setCell,
      board,
      turn
    } = this.props;
      
    return (
      <div className={ `cell cell-${cellNumber}` } onClick={(e) => setCell(e, indexOne, indexTwo, turn)}>{board[indexOne][indexTwo]}</div>
    );
  }
}

export default Board;
