const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json')
}

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip
  return request(`https://api.freegeoip.app/json/${ip}?apikey=4cb024b0-7a53-11ec-b260-95ecd4c0365c`);
}

const fetchISSFlyOverTimes = function(body) {
  const { latitude, longitude } = JSON.parse(body)
  return request(`https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`)
}

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((body) => {
      return JSON.parse(body).response;
    })
}

// module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };
module.exports = { nextISSTimesForMyLocation };