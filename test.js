const assert = require('assert').strict;

const {
  loadRegions,
  findRegion,
  raiseError,
  parsePostcode
} = require('./lib/postcodeToRegion')

assert.deepEqual(parsePostcode(''), {result:null, error: {error: 'no postcode found in request'}})
assert.deepEqual(parsePostcode('AAAAAAA'), {result:null, error: {error: 'no retrievable postcode'}})
assert.deepEqual(parsePostcode('W7 2JY'), {result:'W7', error: null})
assert.deepEqual(parsePostcode(' W7 2JY'), {result:'W7', error: null})
// TODO deal with spaceless postcodes
// assert.deepEqual(parsePostcode('W72JY'), {result:'W7', error: null})

loadRegions()

assert.equal(findRegion('W7'), '{"region":"London"}')
assert.equal(findRegion('G1'), '{"region":"Scotland"}')
assert.equal(findRegion('XX'), '{"error":"no retrievable postcode"}')

assert.deepEqual(raiseError('there was an error'), {error: 'there was an error'})





