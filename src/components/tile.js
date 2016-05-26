import React, { Component } from 'react';

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: ''
    };
  }

  handleClick() {
    this.props.onClick();
    if (this.state.marker === '') {
      this.setState({marker: this.props.status})
    }
  }

  render() {
    return (
      <div className="tile" onClick={this.handleClick.bind(this, this.props)}>
        <img src={this.state.marker}/>
      </div>
    );
  }
};

export default Tile;
