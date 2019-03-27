const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address + '.json?access_token=pk.eyJ1IjoibWFkaGF2NDc1IiwiYSI6ImNqdDl4OTZjeTA1ZGE0NHBjZ2d1YTFicmUifQ.zg-1Aq7RX--mwy9j-RnvLw&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('unable to connect to location', undefined)
        } else if(body.features.length === 0){
            callback('unable to find location', undefined)
        } else {
            callback(undefined, {
                lat: body.features[0].center[1],
                lon: body.features[0].center[0],
                location: body.features[0].place_name 
            })
        }
    })
}

module.exports = 
    geocode