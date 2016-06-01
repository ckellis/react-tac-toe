import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Tile from './components/tile';
import Game from './components/game';
import Board from './logic/board';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      n: 5,
      games: 2
    };
  }

  /*
    For each change to the header's input values, this function will determine if the event
    object belongs to the N input or the # of games input. It updates the corresponding state
    only if the conditions are met
  */
  handleChange(e) {
    if (e.target.id === 'N' && e.target.value <= 10) {
      this.setState({n: e.target.value});
    } else if (e.target.id === 'games' && e.target.value <= 5) {
      this.setState({games: e.target.value});
    }
  }

  render() {
    let games = [];
    for (var i = 0; i < this.state.games; i++) {
      games.push(<Game n={this.state.n} key={i} id={i+1}/>);
    }

    return (
      <div>
        <Header n={this.state.n} games={this.state.games} onChange={(e) => {this.handleChange.call(this, e)}}/>
        <div key={this.state.n}>{games}</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.app'));
