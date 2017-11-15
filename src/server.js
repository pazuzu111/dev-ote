const express = require('express')
const logger = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cors = require('cors');

//start the app
const app = express()
const bars = [
    {
        name: 'CrocLounge',
        hours: '12:00 PM - 7:00 PM EVERYDAY​',
        deals:'$4 Coors Light, $5 Well Drinks, $6 High Life + Whiskey, Tecate + Tequila, FREE PIZZA with every drink',
        votes: 0
    },
    {
        name: 'The Globe',
        hours: '4:00 PM - 07:00 PM',
        deals: '$5 draft and bottled beers; $5 well drinks',
        votes: 0

    },
    {
        name: 'Gramercy Ale House',
        hours: 'mon-fri 2pm - 7pm | sat 11am - 7pm | sun 12pm - 7pm',
        votes: 0

    },
    {
        name: 'The Gem Saloon',
        hours: '04:00 PM - 08:00 PM EVERYDAY​',
        deals: 'almost 1/2 off on beers, wines, cocktails(excluding Specialty Cocktails)',
        votes: 0

    },
    {
        name: 'Bar 13',
        hours: '04:00 PM - 08:00 PM EVERYDAY​',
        deals: '2 for 1 bud light, $6 well drinks, $6 seasonal wine',
        votes: 0

    },
    {
        name: 'Reservoir',
        hours: '4:00 PM - 7:00 PM',
        deals: '$4 well drinks, $5 Absolut',
        votes: 0

    },
    {
        name: 'Fitzgeralds',
        hours: '11am - 7pm EVERYDAY​',
        deals: `$4 Fitzgeralds Amber, Budweiser
                 $5 Coney Island Mermaid Pilsner, Red Hook IPA, Shocktop, Bud Light, Blue Point Toasted Lager​
                 $6 Sam Adams Seasonal, Goose Island IPA, Blue Moon
                 $7 Well Drinks`,
        votes: 0

    },
    {
        name: 'Side Bar',
        hours: '12pm -7pm EVERYDAY​',
        deals:'2 for 1 Drinks, $7 Wine',
        votes: 0
    }]

app.use(cors());

//method override
app.use(methodOverride('_method'))

//config
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static('public'))

//static config
const port = process.env.PORT || 3001;
app.listen(port,()=>{
  console.log(`alive on ${port}`)
})

//setup api
app.get('/data', (req, res) => {
  res.json(bars);
});

app.put('/data/:id', (req, res) => {
    let index;

    let result = bars.find((bar, i) => {
        index = i;
       return bar.name === req.params.id
    })
    // console.log(req.params)

    console.log(bars[index],index, result)
    bars[index].votes++;

    res.json(result);
});

app.get('*', (req, res) => {
  res.status(404).json({
    message: 'Invalid route!',
  });
});
