const request = require('request');
const timers = require('timers');

timers.setInterval(() => {
  // ping google to check if we have outside network access
  request('http://www.google.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('Network available');
    } else {
      if (response) {
        console.log(`Network error - code=${response.statusCode} error=${error}`);
      } else {
        console.log(`Network error - error=${error}`)
      }
    }
  })
}, 60000);
