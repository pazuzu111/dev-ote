import React, { Component } from 'react';
import Vote from './Vote.js'
import But from './But.js'
import axios from 'axios'
import './App.css';
// import { findDOMNode } from 'react-dom';
import $ from 'jquery';


//START
export default class App extends Component {
    constructor() {
    super();

    //initialize state
    this.state = ({

        bars:[],
        voted: false
    });

    //bind handlers
    this.handleClick = this.handleClick.bind(this);
    this.getData = this.getData.bind(this);

    // let ips = [];
  }

//fetch data
getData(){
    fetch('http://localhost:3001/data')
      .then(res => res.json())
      .then(res => {

        this.setState({
            bars:res,

        })
    })
}

//on mount
componentDidMount() {
    this.getData()
    //  $.getJSON("https://api.ipify.org/?format=json", function(e) {
    // console.log(e.ip);
    // ips.p
    this.interval = setInterval(this.getData, 500);
}

//clear so we dont have data leaks
componentWillUnmount() {
  clearInterval(this.interval);
}
// onClick setState - increment vote trip flag
handleClick = (vote, id) => {

    //trip flag to disable vote
    this.setState({
        voted:true,
    })
    console.log('vote', id);

    let url = `http://localhost:3001/data/${id}`

    //PUT request
    axios.put(url)
    .then((response)=> {
        console.log("Data submitted successfully");
        this.getData()
    })
    .catch((error)=> {
        console.log("got errr while posting data", error);
    });
};



//**********************************************************************

  render() {
    return (
        <div>
            <div className="App">
                <div>
                    {this.state.bars ?
                        this.state.bars.map((x,i) => {
                            return (

                                //output buttons to dom
                                <But key={i} handleClick={()=> this.handleClick(x.votes, x.name)}
                                name={x.name}
                                hours={x.hours}
                                deals={x.deals}
                                voted={this.state.voted}
                                />
                            )
                        })
                    :
                    <p>Loading...</p>
                    }

                    <div className="result">
                    {this.state.bars ?
                        this.state.bars.map((x, i) => {
                            return (<Vote key={i} result={this.state.bars[i].votes} name={this.state.bars[i].name} />)
                        })
                    :
                    <p>Loading...</p>
                    }
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
