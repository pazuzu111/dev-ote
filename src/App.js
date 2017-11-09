import React, { Component } from 'react';
import Vote from './Vote.js'
// import Info from './Info.js'
import But from './But.js'
import './App.css';

class App extends Component {
    constructor(props) {
    super(props);

    //initialize state
    this.state = ({
        localVote1: JSON.parse(localStorage.getItem('count1'))+0,
        localVote2: JSON.parse(localStorage.getItem('count2'))+0,
        localVote3: JSON.parse(localStorage.getItem('count3'))+0,
        localVote4: JSON.parse(localStorage.getItem('count4'))+0,
        localVote5: JSON.parse(localStorage.getItem('count5'))+0,
        localVote6: JSON.parse(localStorage.getItem('count6'))+0,
        localVote7: JSON.parse(localStorage.getItem('count7'))+0,
        localVote8: JSON.parse(localStorage.getItem('count8'))+0,

        bar1: 'Croc Lounge',
        hours1: '12:00 PM - 7:00 PM EVERYDAY​',
        deals1:'$4 Coors Light, $5 Well Drinks, $6 High Life + Whiskey, Tecate + Tequila',

        bar2: 'The Globe',
        hours2: '4:00 PM - 07:00 PM',
        deals2: '$5 draft and bottled beers; $5 well drinks',

        bar3: 'Gramercy Ale House',
        hours3: 'mon-fri 2pm - 7pm | sat 11am - 7pm | sun 12pm - 7pm',

        bar4: 'The Gem Saloon',
        hours4: '04:00 PM - 08:00 PM EVERYDAY​',
        deals4: 'almost 1/2 off on beers, wines, cocktails(excluding Specialty Cocktails)',

        bar5: 'Bar 13',
        hours5: '04:00 PM - 08:00 PM EVERYDAY​',
        deals5: '2 for 1 bud light, $6 well drinks, $6 seasonal wine',

        bar6: 'Reservoir',
        hours6: '4:00 PM - 7:00 PM',
        deals6: '$4 well drinks, $5 Absolut',

        bar7: 'Fitzgeralds',
        hours7: '11am - 7pm EVERYDAY​',
        deals7: `$4 Fitzgeralds Amber, Budweiser
                 $5 Coney Island Mermaid Pilsner, Red Hook IPA, Shocktop, Bud Light, Blue Point Toasted Lager​
                 $6 Sam Adams Seasonal, Goose Island IPA, Blue Moon
                 $7 Well Drinks`,

        bar8: 'Side Bar',
        hours8: '12pm -7pm EVERYDAY​',
        deals8:'2 for 1 Drinks, $7 Wine',

        bar9: null,
        hours9: null,

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
        else if(ls === 'localVote3')
        {
            localStorage.setItem('count3',count)
        }
        else if(ls === 'localVote4')
        {
            localStorage.setItem('count4',count)
        }
        else if(ls === 'localVote5')
        {
            localStorage.setItem('count5',count)
        }
        else if(ls === 'localVote6')
        {
            localStorage.setItem('count6',count)
        }
        else if(ls === 'localVote7')
        {
            localStorage.setItem('count7',count)
        }
        else if(ls === 'localVote8')
        {
            localStorage.setItem('count8',count)
        }
        else if(ls === 'localVote9')
        {
            localStorage.setItem('count9',count)
        }

    };

//**********************************************************************

  render() {
    return (
        <div>
            <div className="App">

                <But handleClick={(e)=> this.handleClick(e, 'localVote1')} voted={this.state.voted} name={this.state.bar1} hours={this.state.hours1} deals={this.state.deals1}/>
                <But handleClick={(e)=> this.handleClick(e, 'localVote2')} voted={this.state.voted} name={this.state.bar2} hours={this.state.hours2} deals={this.state.deals2}/>
                <But handleClick={(e)=> this.handleClick(e, 'localVote3')} voted={this.state.voted} name={this.state.bar3} hours={this.state.hours3} deals={this.state.deals3}/>
                <But handleClick={(e)=> this.handleClick(e, 'localVote4')} voted={this.state.voted} name={this.state.bar4} hours={this.state.hours4} deals={this.state.deals4}/>
                <But handleClick={(e)=> this.handleClick(e, 'localVote5')} voted={this.state.voted} name={this.state.bar5} hours={this.state.hours5} deals={this.state.deals5}/>
                <But handleClick={(e)=> this.handleClick(e, 'localVote6')} voted={this.state.voted} name={this.state.bar6} hours={this.state.hours6} deals={this.state.deals6}/>
                <But handleClick={(e)=> this.handleClick(e, 'localVote7')} voted={this.state.voted} name={this.state.bar7} hours={this.state.hours7} deals={this.state.deals7}/>
                <But handleClick={(e)=> this.handleClick(e, 'localVote8')} voted={this.state.voted} name={this.state.bar8} hours={this.state.hours8} deals={this.state.deals8}/>
                <But handleClick={(e)=> this.handleClick(e, 'localVote9')} voted={this.state.voted} name={this.state.bar9} hours={this.state.hours9} deals={this.state.deals9}/>


                <div className="result">
                    <Vote result={localStorage.getItem('count1')} name={this.state.bar1} />
                    <Vote result={localStorage.getItem('count2')}/>
                    <Vote result={localStorage.getItem('count3')} />
                    <Vote result={localStorage.getItem('count4')}/>
                    <Vote result={localStorage.getItem('count5')} />
                    <Vote result={localStorage.getItem('count6')}/>
                    <Vote result={localStorage.getItem('count7')} />
                    <Vote result={localStorage.getItem('count8')}/>
                    <Vote result={localStorage.getItem('count9')} />

                </div>
            </div>
        </div>
    );
  }
}

export default App;
