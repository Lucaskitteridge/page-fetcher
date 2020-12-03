const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);

request(args[0], (error, response, body) => {
  console.log('error:', error);
  fs.writeFile(args[1], body, function(err) {
    if (err) throw err;
    else {console.log(`Downloaded and saved ${response.headers[`content-length`]} bytes to ${args[1]}`)}
  });
});