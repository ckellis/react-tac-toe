import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tile from './components/tile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // board: [],
      player: '../../img/x.svg'
    };
  }

  handleClick() {
    let nextPlayer = this.state.player === '../../img/x.svg' ? '../../img/o.svg' : '../../img/x.svg';
    this.setState({player: nextPlayer});
  }

  render() {
    let board = [
      {x: 0, y: 0, status: ''}, {x: 1, y: 0, status: ''}, {x: 2, y: 0, status: ''},
      {x: 0, y: 1, status: ''}, {x: 1, y: 1, status: ''}, {x: 2, y: 1, status: ''},
      {x: 0, y: 2, status: ''}, {x: 1, y: 2, status: ''}, {x: 2, y: 2, status: ''}
    ]

    let tiles = board.map((tile, i) => {
      return <Tile x={tile.x} y={tile.y} status={this.state.player} key={i} onClick={this.handleClick.bind(this)} />
    })

    return (
      <div className="board">
        <div className="grid">
          {tiles}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
