import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tile from './components/tile';
import Board from './logic/board'

class App extends Component {
  constructor(props) {
    super(props);
    this.game = new Board(3);
    this.state = {
      player: 'X',
      winner: null
    };
  }

  handleClick(x, y) {
    let winner = this.game.turn(x, y, this.state.player);
    this.setState({winner});

    let nextPlayer = this.state.player === 'X' ? 'O' : 'X';
    this.setState({player: nextPlayer});
  }

  render() {

    let tiles = this.game.board.map((row, i) => {
      return row.map((tile, j) => {
        return <Tile x={j} y={i} turn={this.state.player} key={i+j} onClick={(x, y) => {this.handleClick.call(this, x, y)}} />
      });
    });

    return (
      <div className="container">
        <div className="board">
          <div className="grid">
            {tiles}
          </div>
        </div>
        {this.state.winner ? <div>{this.state.winner} wins!</div> : ''}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.app'));
