import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tile from './components/tile';
import Game from './components/game';
import Board from './logic/board';

class App extends Component {
  constructor(props) {
    super(props);
    let n = 5;
    this.state = {
      n: n,
      games: 2
    };
  }

  handleClick(x, y) {
    let winner = this.game.turn(x, y, this.state.player);
    this.setState({winner});

    let nextPlayer = this.state.player === 'X' ? 'O' : 'X';
    this.setState({player: nextPlayer});
  }

  handleChange(e) {
    this.setState({n: e.target.value});
  }

  render() {
    let games = [];
    for (var i = 0; i < this.state.games; i++) {
      games.push(<Game n={this.state.n} key={i} id={i+1}/>);
    }

    return (
      <div>
        {games}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.app'));
