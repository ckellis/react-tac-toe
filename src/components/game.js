import React, { Component } from 'react';
import Tile from './tile';
import Board from '../logic/board'

const initialState = {
  player: 'X',
  winner: null
};

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.n = props.n;
    this.resetCount = 0;
    this.game = new Board(this.n);
  }

  /*
    On each click to the game's tiles, the target tile will pass its x and y props upward to
    check for a winner in the current board state
  */
  handleClick(x, y) {
    let winner = this.game.turn(x, y, this.state.player);
    this.setState({winner});

    let nextPlayer = this.state.player === 'X' ? 'O' : 'X';
    this.setState({player: nextPlayer});
  }

  /*
    Resets state to initialState on button click, and increments the resetCount property,
    effectively re-mounting the grid component to clear tiles of their markers
  */
  handleReset() {
    this.setState(initialState);
    this.resetCount++;
  }

  /*
    The board needs to keep track of its column:row coordinates in order to ensure an efficient
    'checkWin' solution. The tradeoff here is off course the O(n2) time taken to map over the
    nested arrays, but due to the complexity of utilizing an array of objects to check for a winning
    board state, the nested arrays seemed more practical
  */
  render() {
    let tiles = this.game.board.map((row, i) => {
      return row.map((tile, j) => {
        return <Tile n={this.n} x={j} y={i} turn={this.state.player} key={i+j} onClick={(x, y) => {this.handleClick.call(this, x, y)}} />
      });
    });

    return (
      <div className="container">
        <div className="controls">
          <button onClick={this.handleReset.bind(this)}>Reset</button>
          {this.state.winner ? <div className="winner">{this.state.winner} wins!</div> : ''}
        </div>
        <h2>Game #{this.props.id}</h2>
        <div className="board">
          <div className="grid" key={this.resetCount}>
            {tiles}
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
