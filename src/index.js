import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tile from './components/tile';

class App extends Component {
  constructor(props) {
    super(props);
    this.game = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.state = {
      player: 'X',
      winner: null
    };
  }

  handleClick(x, y) {
    // if (checkWin(this.state.board, this.state.player)) { this.setState({winner: this.state.player}) }
    // let boardUpdate = this.state.board;

    let nextPlayer = this.state.player === 'X' ? 'O' : 'X';
    this.setState({player: nextPlayer});
  }

  render() {

    let tiles = this.game.map((row, i) => {
      return row.map((tile, j) => {
        return <Tile x={j} y={i} turn={this.state.player} key={i+j} onClick={this.handleClick.bind(this)} />
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
