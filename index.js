const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);
// });

// fetchCoordsByIP('99.229.142.150', (error, data) => {
//   if (error) {
//     console.log('Error', error);
//   } else {
//     console.log(data);
//   }
// })

// fetchISSFlyOverTimes({ latitude: 43.8985, longitude: -79.4143 }, (error, array) => {
//   if (error) {
//     console.log('Error', error);
//     return
//   }
//   console.log(array);
// })

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};


nextISSTimesForMyLocation((error, result) => {
  if (error) {
    return console.log('It doesn\'t work', error);
  }
  printPassTimes(result);
})


module.exports = { printPassTimes }