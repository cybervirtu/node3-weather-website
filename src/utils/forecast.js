const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/ff21361535bb22e0ed02dd5cfcb8f16c/'+ lat + ',' + long

request({url, json: true}, (error, {body}) => {

    const data = body.currently
    if(error){
        callback("can't find the data", undefined)
    } else{
        const yes = 'It is currently ' + data.temperature + ' degrees out.' + 'There is ' + data.windSpeed
        callback(undefined, yes)
    }
   
})

}

module.exports = forecast