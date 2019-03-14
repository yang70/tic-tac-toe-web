import React, { Component } from 'react';
import './index.css';

class NewButton extends Component {
  handleClick = (e) => {
    console.log("hello");
  }
  
  render() {
    return (
      <button onClick={this.handleClick}>New Game</button>
    );
  }
}

export default NewButton;
