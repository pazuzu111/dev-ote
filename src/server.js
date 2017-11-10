const express = require('express')
const logger = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

//start the app
const app = express()
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

app.get('/', (req, res) => {
  res.json([
    {
        bar1: 'Croc Lounge',
        hours1: '12:00 PM - 7:00 PM EVERYDAY​',
        deals1:'$4 Coors Light, $5 Well Drinks, $6 High Life + Whiskey, Tecate + Tequila',
    },
    {
        bar2: 'The Globe',
        hours2: '4:00 PM - 07:00 PM',
        deals2: '$5 draft and bottled beers; $5 well drinks',

    },
    {
        bar3: 'Gramercy Ale House',
        hours3: 'mon-fri 2pm - 7pm | sat 11am - 7pm | sun 12pm - 7pm',
    },
    {
        bar4: 'The Gem Saloon',
        hours4: '04:00 PM - 08:00 PM EVERYDAY​',
        deals4: 'almost 1/2 off on beers, wines, cocktails(excluding Specialty Cocktails)',

    },
    {
        bar5: 'Bar 13',
        hours5: '04:00 PM - 08:00 PM EVERYDAY​',
        deals5: '2 for 1 bud light, $6 well drinks, $6 seasonal wine',

    },
    {
        bar6: 'Reservoir',
        hours6: '4:00 PM - 7:00 PM',
        deals6: '$4 well drinks, $5 Absolut',
    },
    {
        bar7: 'Fitzgeralds',
        hours7: '11am - 7pm EVERYDAY​',
        deals7: `$4 Fitzgeralds Amber, Budweiser
                 $5 Coney Island Mermaid Pilsner, Red Hook IPA, Shocktop, Bud Light, Blue Point Toasted Lager​
                 $6 Sam Adams Seasonal, Goose Island IPA, Blue Moon
                 $7 Well Drinks`,
    },
    {
        bar8: 'Side Bar',
        hours8: '12pm -7pm EVERYDAY​',
        deals8:'2 for 1 Drinks, $7 Wine',

    },

  ]);
});


app.get('*', (req, res) => {
  res.status(404).json({
    message: 'Invalid route!',
  });
});
