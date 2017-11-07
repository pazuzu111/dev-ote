import React, { Component } from 'react';

export default class Info extends Component {

  render() {
    return (
        <div>
            <button onClick={this.props.handleClick}>
                OFF
            </button>
        </div>
    );
  }
}
