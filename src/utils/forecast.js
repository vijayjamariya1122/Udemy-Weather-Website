const request = require('request');

const forecast = (lat,long,callback) => {
    const url = 'http://localhost:4567/'+ lat +','+long

    request({ url, json: true}, (error,{ body }) => {
        if(error)
        {
            callback("Unable to connect to weather services", undefined)        
        }
        else if(body.error)
        {
            callback("Unable to find location", undefined)
        }
        else
        {
            callback(undefined, body.currently.temprature)
        }
    })
}

module.exports = forecast