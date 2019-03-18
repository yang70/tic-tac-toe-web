import React, { Component } from 'react';
import NewButton from '../NewButton';
import './index.css';

class Nav extends Component {
  render() {
    return (
      <nav className="nav-container">
        <NewButton newGame={this.props.newGame}/>
        
        <div className="header">
          <h1>TIC TAC TOE</h1>
        </div>
      </nav>
    );
  }
}

export default Nav;
