const path = require('path');
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocoding')
const forecast = require('./utils/forecast')

const app = express()

const port = process.env.PORT || 3000

//define paths for express config
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine and views location 
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

//setup static directory to serve
app.use(express.static(publicDirPath))

//express routes
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Vijay Jamariya'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'We Are Available 24*7 For Our Valuable Customers.',
        title: 'Help',
        name: 'Vijay Jamariya'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Vijay Jamariya'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address)
    {
        return res.send({
            error: 'Please Provide Address Term!'
        })
    }

    //Actual Weather Code But My Weather Api Service is Not Working
    // geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
    //     if(error)
    //     {
    //        return res.send({ error })
    //     }

    //     forecast(latitude, longitude, (error, forecastData) => {
    //         if(error)
    //         {
    //             return res.send({ error })
    //         }

    //         res.send({
    //             forcast: forecastData,
    //             location,
    //             address: req.query.address
    //         })
    //     })
    // })

    res.send({
        forcast: 'Rain Until Evening. It is currently 36 degrees out. there is a 0% chances of rain.',
        location: 'Mumbai, Maharashtra, India',
        address: req.query.address
      
    });
})

app.get('/products', (req, res) => {
    if(!req.query.search)
    {
      return res.send({
            error: 'Must provide search term'
        })
    }
  
        console.log(req.query)
        res.send({
            products: []
        })
    
 
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Vijay Jamariya',
        errormessage: 'Help Article Not Found!'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Vijay Jamariya',
        errormessage: 'Page Not Found'
    })
})

//express listening on port no 3000
app.listen(port, () => {
    console.log('server listing on '+ port);
   // console.log('Udemy Node')
})