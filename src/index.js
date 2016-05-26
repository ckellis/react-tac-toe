import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tile from './components/tile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: 'X'
    };
  }

  handleClick() {
    console.log("HEY")
  }

  render() {
    return (
      <div className="board">
        <Tile onClick={this.handleClick} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));


