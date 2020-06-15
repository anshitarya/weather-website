const request =require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=394e8567d2e215884a77b9ac913ac840&query= ' + latitude + ',' + longitude +''

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect', undefined)
        } else if (body.error) {
            callback('Unable', undefined)
        } else { 
        callback(undefined, 'It is currently ' + body.current.temperature + 'degrees out.There it feels ' + body.current.feelslike + 'degrees out')
               }
    })


}

module.exports=forecast
