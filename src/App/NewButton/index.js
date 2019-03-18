import React, { Component } from 'react';
import './index.css';

class NewButton extends Component {
  
  render() {
    return (
      <button onClick={this.props.newGame} className="new-button">
        <span className="arrow">&#8635;</span> New
      </button>
    );
  }
}

export default NewButton;
