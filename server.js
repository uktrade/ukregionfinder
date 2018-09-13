const http = require('http');
const {
  loadRegions,
  findRegion
} = require('./lib/postcodeToRegion')
const log = require('./lib/logger').log

const port = process.env['PORT'] || 8888;

loadRegions()

const server = http.createServer((req, res) => {
  let message = 'usage: pcode=POSTCODE'

  if (req.url.indexOf('/pcode') === 0) {
    let pcode = req.url.split('=')[1]
    message = findRegion(pcode)
    log(req.url, `responded with ${message}`)
  }

  if (req.url.indexOf('/status') === 0) {
    message = 'OK'
  }


  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(message);
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});