const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjFmMjJjZGE3LWY3YmUtNDI2NS1iN2QyLWU2ZWFhZGI4ODlkZi0xNzM4NzE2NTkwMTg0IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiY2Y2NzEwMjMtODljNy00ZTI3LTgwYjQtNWY5YTQxZWI4ZDRiIiwidHlwZSI6InQifQ.gQNAvrmupU9eCbV4qZCTvgxNh6ewpAG8He0bn12iSmg'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
