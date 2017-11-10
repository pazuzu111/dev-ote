import React, { Component } from 'react';
import Vote from './Vote.js'
// import Info from './Info.js'
import But from './But.js'
import './App.css';

class App extends Component {
    constructor() {
    super();

    //initialize state
    this.state = ({
        // localVote1: JSON.parse(localStorage.getItem('count1'))+0,
        // localVote2: JSON.parse(localStorage.getItem('count2'))+0,
        // localVote3: JSON.parse(localStorage.getItem('count3'))+0,
        // localVote4: JSON.parse(localStorage.getItem('count4'))+0,
        // localVote5: JSON.parse(localStorage.getItem('count5'))+0,
        // localVote6: JSON.parse(localStorage.getItem('count6'))+0,
        // localVote7: JSON.parse(localStorage.getItem('count7'))+0,
        // localVote8: JSON.parse(localStorage.getItem('count8'))+0,

        // bar1: 'Croc Lounge',
        // hours1: '12:00 PM - 7:00 PM EVERYDAY​',
        // deals1:'$4 Coors Light, $5 Well Drinks, $6 High Life + Whiskey, Tecate + Tequila',

        // bar2: 'The Globe',
        // hours2: '4:00 PM - 07:00 PM',
        // deals2: '$5 draft and bottled beers; $5 well drinks',

        // bar3: 'Gramercy Ale House',
        // hours3: 'mon-fri 2pm - 7pm | sat 11am - 7pm | sun 12pm - 7pm',

        // bar4: 'The Gem Saloon',
        // hours4: '04:00 PM - 08:00 PM EVERYDAY​',
        // deals4: 'almost 1/2 off on beers, wines, cocktails(excluding Specialty Cocktails)',

        // bar5: 'Bar 13',
        // hours5: '04:00 PM - 08:00 PM EVERYDAY​',
        // deals5: '2 for 1 bud light, $6 well drinks, $6 seasonal wine',

        // bar6: 'Reservoir',
        // hours6: '4:00 PM - 7:00 PM',
        // deals6: '$4 well drinks, $5 Absolut',

        // bar7: 'Fitzgeralds',
        // hours7: '11am - 7pm EVERYDAY​',
        // deals7: `$4 Fitzgeralds Amber, Budweiser
        //          $5 Coney Island Mermaid Pilsner, Red Hook IPA, Shocktop, Bud Light, Blue Point Toasted Lager​
        //          $6 Sam Adams Seasonal, Goose Island IPA, Blue Moon
        //          $7 Well Drinks`,

        // bar8: 'Side Bar',
        // hours8: '12pm -7pm EVERYDAY​',
        // deals8:'2 for 1 Drinks, $7 Wine',

        // bar9: null,
        // hours9: null,
        bars:[],
        voted: false
    });

    this.handleClick = this.handleClick.bind(this);
  }

componentDidMount() {
    fetch('http://localhost:3001/data')
      .then(res => res.json())
      .then(res => {

        this.setState({
            bars:res
        })
        console.log(this.state.bars.barone)
    })
  }

    //onClick setState - increment vote trip flag
    handleClick = (vote) => {


    //     return fetch(`http://localhost:3001/data`,{
    //     method: 'PUT',
    //     mode: 'CORS',
    //     body: JSON.stringify(data),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }).then(res => {
    //     thi.setState({res.barone.votes1 += 1 })

    // }).catch(err => err);

    };

//**********************************************************************

  render() {
    return (
        <div>
            <div className="App">
                <div>
                    {this.state.bars[0] ?
                        <But handleClick={()=> this.handleClick(this.state.bars[0].votes1)}
                        name={this.state.bars[0].bar1}
                        hours={this.state.bars[0].hours1}
                        deals={this.state.bars[0].deals1}
                        voted={this.state.voted} /> : <p>Loading...</p>}
                    {this.state.bars[1] ?
                        <But handleClick={()=> this.handleClick(this.state.bars[1].votes2)}
                        name={this.state.bars[1].bar2}
                        hours={this.state.bars[1].hours2}
                        deals={this.state.bars[1].deals2}
                        voted={this.state.voted} /> : <p>Loading...</p>}
                    {this.state.bars[2] ?
                        <But handleClick={()=> this.handleClick(this.state.bars[2].votes3)}
                        name={this.state.bars[2].bar3}
                        hours={this.state.bars[2].hours3}
                        deals={this.state.bars[2].deals3}
                        voted={this.state.voted} /> : <p>Loading...</p>}
                    {this.state.bars[3] ?
                        <But handleClick={()=> this.handleClick(this.state.bars[3].votes4)}
                        name={this.state.bars[3].bar4}
                        hours={this.state.bars[3].hours4}
                        deals={this.state.bars[3].deals4}
                        voted={this.state.voted} /> : <p>Loading...</p>}
                    {this.state.bars[4] ?
                        <But handleClick={()=> this.handleClick(this.state.bars[4].votes5)}
                        name={this.state.bars[4].bar5}
                        hours={this.state.bars[4].hours5}
                        deals={this.state.bars[4].deals5}
                        voted={this.state.voted} /> : <p>Loading...</p>}
                    {this.state.bars[5] ?
                        <But handleClick={()=> this.handleClick(this.state.bars[5].votes6)}
                        name={this.state.bars[5].bar6}
                        hours={this.state.bars[5].hours6}
                        deals={this.state.bars[5].deals6}
                        voted={this.state.voted} /> : <p>Loading...</p>}
                    {this.state.bars[6] ?
                        <But handleClick={()=> this.handleClick(this.state.bars[6].votes7)}
                        name={this.state.bars[6].bar7}
                        hours={this.state.bars[6].hours7}
                        deals={this.state.bars[6].deals7}
                        voted={this.state.voted} /> : <p>Loading...</p>}
                    {this.state.bars[7] ?
                        <But handleClick={()=> this.handleClick(this.state.bars[7].votes8)}
                        name={this.state.bars[7].bar8}
                        hours={this.state.bars[7].hours8}
                        deals={this.state.bars[7].deals8}
                        voted={this.state.voted} /> : <p>Loading...</p>}

                </div>
                <div className="result">
                    {this.state.bars[0] ? <Vote result={this.state.bars[0].votes1} name={this.state.bars[0].bar1} /> : <p>Loading...</p>}
                    {this.state.bars[1] ? <Vote result={this.state.bars[1].votes2} name={this.state.bars[1].bar2} /> : <p>Loading...</p>}
                    {this.state.bars[2] ? <Vote result={this.state.bars[2].votes3} name={this.state.bars[2].bar3} /> : <p>Loading...</p>}
                    {this.state.bars[3] ? <Vote result={this.state.bars[3].votes4} name={this.state.bars[3].bar4} /> : <p>Loading...</p>}
                    {this.state.bars[4] ? <Vote result={this.state.bars[4].votes5} name={this.state.bars[4].bar5} /> : <p>Loading...</p>}
                    {this.state.bars[5] ? <Vote result={this.state.bars[5].votes6} name={this.state.bars[5].bar6} /> : <p>Loading...</p>}
                    {this.state.bars[6] ? <Vote result={this.state.bars[6].votes7} name={this.state.bars[6].bar7} /> : <p>Loading...</p>}
                    {this.state.bars[7] ? <Vote result={this.state.bars[7].votes8} name={this.state.bars[7].bar8} /> : <p>Loading...</p>}
                </div>
            </div>
        </div>
    );
  }
}

export default App;
