import React, { Component } from 'react';

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: '',
      n: props.n
    };
  }

  handleClick() {
    if (this.state.marker === '') {
      this.props.onClick(this.props.x, this.props.y);
      let src = this.props.turn === 'X' ? '../../img/x.svg' : '../../img/o.svg';
      this.setState({marker: src})
    }
  }

  render() {
    let tileDimensions = {
      "height": 300/this.state.n + 'px',
      "width": 300/this.state.n + 'px'
    }

    return (
      <div className="tile" style={tileDimensions} onClick={this.handleClick.bind(this, this.props)}>
        <img src={this.state.marker}/>
      </div>
    );
  }
};

export default Tile;
