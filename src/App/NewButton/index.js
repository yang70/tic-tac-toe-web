import React, { Component } from 'react';
import './index.css';

class NewButton extends Component {
  
  render() {
    return (
      <button onClick={this.props.newGame}>New Game</button>
    );
  }
}

export default NewButton;
