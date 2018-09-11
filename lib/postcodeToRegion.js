const fs = require('fs')

let regions = {}

function loadRegions() {
  const lines = fs.readFileSync('./regions.csv', 'UTF-8').split('\n')
  const begin = process.hrtime()[1]
  lines.forEach((li) => {
    line = li.split(',')
    regions[line[0]] = line[1]
  })
  const finish = process.hrtime()[1]
  console.log((lines.length+1) + ' lines of CSV parsed in ' + ((finish - begin) / (1000 * 1000)) + ' milliseconds')
}

function parsePostcode(postcode) {
  let error, result = null

  if (!postcode || postcode === '') {
    error = raiseError('no postcode found in request')
  } else {
    const pc_pattern = new RegExp(/([A-Z]{1,2}\d{1,2})\D?/)
    const possible = postcode.toUpperCase().match(pc_pattern)

    if (!possible) {
      error = raiseError('no retrievable postcode')
    } else {
      result = possible[1]
    }
  }

  return {error: error, result: result}
}

function findPostcode(postcode) {
  const res = parsePostcode(postcode)
  if (!res.error) {
    return JSON.stringify({region:regions[res.result]})
  } else {
    return JSON.stringify(res.error)
  }
}

function raiseError(msg) {
  return {
    error: msg
  }
}

module.exports = {
  loadRegions,
  findPostcode,
  raiseError,
  parsePostcode
}