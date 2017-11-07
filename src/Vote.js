import React, { Component } from 'react';
import './App.css';
export default class VoteResult extends Component {
  render() {
    return (
      // <div id="voteContainer">
        <div className="voteResult">
            <h1>{this.props.result}</h1>
        </div>
      // </div>
    );
  }
}
