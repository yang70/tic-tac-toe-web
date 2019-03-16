import React, { Component } from 'react';
import Cell from '../Cell';
import './index.css';

class Board extends Component {
  render() {
    const {
      board,
      turn,
      setCell
    } = this.props;
    
    return (
      <div className="board-container">
        <div className="column">
          <Cell board={board} turn={turn} setCell={setCell} cellNumber={1} indexOne={0} indexTwo={0}/>
          <Cell board={board} turn={turn} setCell={setCell} cellNumber={4} indexOne={1} indexTwo={0}/>
          <Cell board={board} turn={turn} setCell={setCell} cellNumber={7} indexOne={2} indexTwo={0}/>
        </div>
        <div className="column">
          <Cell board={board} turn={turn} setCell={setCell} cellNumber={2} indexOne={0} indexTwo={1}/>
          <Cell board={board} turn={turn} setCell={setCell} cellNumber={5} indexOne={1} indexTwo={1}/>
          <Cell board={board} turn={turn} setCell={setCell} cellNumber={8} indexOne={2} indexTwo={1}/>
        </div>
        <div className="column">
          <Cell board={board} turn={turn} setCell={setCell} cellNumber={3} indexOne={0} indexTwo={2}/>
          <Cell board={board} turn={turn} setCell={setCell} cellNumber={6} indexOne={1} indexTwo={2}/>
          <Cell board={board} turn={turn} setCell={setCell} cellNumber={9} indexOne={2} indexTwo={2}/>
        </div>
      </div>
    );
  }
}

export default Board;
