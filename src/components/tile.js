import React, { Component } from 'react';

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: ''
    };
  }

  /*
    If a tile is empty, the props method 'onClick' will be called, passing in the x and y props
    to calculate a potential winner in the parent component. Depending on the 'turn' prop, the
    src to the marker displayed in the tile will be either an 'X' or 'O' svg
  */
  handleClick() {
    if (this.state.marker === '') {
      this.props.onClick(this.props.x, this.props.y);
      let src = this.props.turn === 'X' ? '../../img/x.svg' : '../../img/o.svg';
      this.setState({marker: src})
    }
  }

  /*
    This style object is used to calculate the height and width of each tile relative to N and
    the total grid space (~300px). This approximation works well until N > 10, which is why the
    limit is set to 10 in the header component
  */
  render() {
    let tileDimensions = {
      "height": 300/this.props.n + 'px',
      "width": 300/this.props.n + 'px'
    }

    return (
      <div className="tile" style={tileDimensions} onClick={this.handleClick.bind(this, this.props)}>
        {this.state.marker !== '' ? <img src={this.state.marker}/> : ''}
      </div>
    );
  }
};

export default Tile;
