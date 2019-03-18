import React, { Component } from 'react';
import Column from '../Column';
import './index.css';

class Board extends Component {
  render() {
    const {
      game,
      setCell
    } = this.props;
    
    const columnIndices = [
      [ [ 1, 0, 0 ], [ 4, 1, 0 ], [ 7, 2, 0 ], 1 ],
      [ [ 2, 0, 1 ], [ 5, 1, 1 ], [ 8, 2, 1 ], 2 ],
      [ [ 3, 0, 2 ], [ 6, 1, 2 ], [ 9, 2, 2 ], 3 ],
    ] 
    
    return (
      <div className="board-container">
        { 
          columnIndices.map( ( groupArray ) => {
            let key = groupArray.pop();
            
            return <Column game={ game } 
                           setCell={ setCell } 
                           groupArray={ groupArray } 
                           key={ key }/>
          } )
        }
      </div>
    );
  }
}

export default Board;
