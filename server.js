const http = require('http');

const port = process.env['PORT'] || 8888;

const {
  loadRegions,
  findPostcode
} = require('./lib/postcodeToRegion')

loadRegions()

const server = http.createServer((req, res) => {
  let message = 'usage: pcode=POSTCODE'

  if (req.url.indexOf('/pcode') === 0) {
    let pcode = req.url.split('=')[1]
    message = findPostcode(pcode)
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