import React, { Component } from 'react';
import './index.css';

class Board extends Component {
  render() {
    return (
      <div className="board-container">
        <div className="column">
          <div className="cell-1"></div>
          <div className="cell-4"></div>
          <div className="cell-7"></div>
        </div>
        <div className="column">
          <div className="cell-2"></div>
          <div className="cell-5"></div>
          <div className="cell-8"></div>
        </div>
        <div className="column">
          <div className="cell-3"></div>
          <div className="cell-6"></div>
          <div className="cell-9"></div>
        </div>
      </div>
    );
  }
}

export default Board;
