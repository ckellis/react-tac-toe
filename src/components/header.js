import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  handleChange(e) {
    this.props.onChange(e);
  }

  render() {
    return (
      <div className="header">
        <span className="title">react-tac-toe</span>
        <div className="constraints">
          # of Columns/Rows = <input id="N" type="text" value={this.props.n} onChange={this.handleChange.bind(this)}/><br/><br/>
          # of Active Games = <input id="games" type="text" value={this.props.games} onChange={this.handleChange.bind(this)}/>
        </div>
      </div>
    );
  }
};

export default Header;
