import React, { Component } from 'react';
import './App.css';
import Vote from './Vote.js'
import Info from './Info.js'
import But from './But.js'


class App extends Component {
    constructor(props) {
    super(props);

    //initialize state
    this.state = ({
        localVote1: JSON.parse(localStorage.getItem('count1'))+0,
        localVote2: JSON.parse(localStorage.getItem('count2'))+0,


        voted: false
    });
  }
    //onClick setState - increment vote trip flag
    handleClick = (e,ls) => {
        this.setState(prevState => ({
            [ls]: prevState[ls] + 1,
            voted:true
        }));

        //convert target to json
        let count = JSON.stringify(this.state[ls] + 1)

        //grab save to local storage
        if(ls === 'localVote1')
        {
            localStorage.setItem('count1',count)
        }
        else if(ls === 'localVote2')
        {
            localStorage.setItem('count2',count)
        }
  };

//**********************************************************************

  render() {
    return (
        <div className="App">
            <div className="buttons">
                <But handleClick={(e)=> this.handleClick(e, 'localVote1')}/>
                // <Info handleClick={(e)=> this.handleClick(e, 'localVote1')} />
                <Info handleClick={(e)=> this.handleClick(e, 'localVote2')} />
            </div>

            <div className="result">
                <Vote result={localStorage.getItem('count1')} />
                <Vote result={localStorage.getItem('count2')}/>
            </div>
        </div>
    );
  }
}

export default App;
