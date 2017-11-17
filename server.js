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
        address: '325 E 14th St',
        hours: 'Happy Hour: 12:00 PM - 7:00 PM EVERYDAY​',
        deals:'$4 Coors Light, $5 Well Drinks, $6 High Life + Whiskey, Tecate + Tequila, FREE PIZZA with every drink',
        votes: 0
    },
    {
        name: 'The Globe',
        address: '158 E 23rd St',
        hours: 'Happy Hour: 4:00 PM - 07:00 PM',
        deals: '$5 draft and bottled beers; $5 well drinks',
        votes: 0

    },
    {
        name: 'Gramercy Ale House',
        address: '272 3rd Ave',
        hours: 'Happy Hour: mon-fri 2pm - 7pm | sat 11am - 7pm | sun 12pm - 7pm',
        votes: 0

    },
    {
        name: 'The Gem Saloon',
        address: '375 3rd Avenue',
        hours: 'Happy Hour: 04:00 PM - 08:00 PM EVERYDAY​',
        deals: 'almost 1/2 off on beers, wines, cocktails(excluding Specialty Cocktails)',
        votes: 0

    },
    {
        name: 'Bar 13',
        address: '13th St and University Pl',
        hours: 'Happy Hour: 04:00 PM - 08:00 PM EVERYDAY​',
        deals: '2 for 1 bud light, $6 well drinks, $6 seasonal wine',
        votes: 0

    },
    {
        name: 'Reservoir',
        address: '70 University Pl',
        hours: 'Happy Hour: 4:00 PM - 7:00 PM',
        deals: '$4 well drinks, $5 Absolut',
        votes: 0

    },
    {
        name: 'Fitzgeralds',
        address: '336 Third Avenue at 25th Street',
        hours: 'Happy Hour: 11am - 7pm EVERYDAY​',
        deals: `$4 Fitzgeralds Amber, Budweiser
                 $5 Coney Island Mermaid Pilsner, Red Hook IPA, Shocktop, Bud Light, Blue Point Toasted Lager​
                 $6 Sam Adams Seasonal, Goose Island IPA, Blue Moon
                 $7 Well Drinks`,
        votes: 0

    },
    {
        name: 'Snafu 28',
        address: '37 E 28th Street',
        hours: 'Happy Hour: EVERYDAY​ ALLDAY',
        deals: `$3 Bud Light Pints (til' 7PM)
                $5 Shots: Jameson Picklebacks, Jager, Stoli O, Fireball & Jack Honey
                $8 Mojitos, Margaritas, Cosmopolitans & Dark & Stormy
                $8 Patron Silver Shots
                Prosecco: By Glass $7 | By Bottle $25
                BEER PONG!!! & POOL!!!`,
        votes: 0

    },
    {
        name: 'Black Door',
        address: '127 West 26th Street',
        hours: 'Happy Hour 4 PM - 7 PM, Monday-Friday,',
        deals: `$6 Red & White Wines,
                $4 Bud Light Bottles,
                $4 Budweiser Bottles,
                $3 PBR, $10 PBR + Shot,
                $5 Seasonal Beers,
                $8 Specialty Cocktail.`,
        votes: 0

    },
    {
        name: 'Side Bar',
        address: '118 E 15th St',
        hours: '12pm -7pm EVERYDAY​',
        deals:'2 for 1 Drinks, $7 Wine',
        votes: 0
    }
]

app.use(cors());

//method override
app.use(methodOverride('_method'))

//config
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

// app.use(express.static('public'));
// app.use(express.static(`${__dirname}/build`));
// app.use(express.static(path.join(__dirname, './build')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./build'));
}

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
