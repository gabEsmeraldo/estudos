var input = require('fs').readFileSync('js/stdin', 'utf8');
var lines = input.split('\n');

var km = parseInt(lines[0])
var liter = parseFloat(lines[1])

console.log((km/liter).toFixed(3) + " km/l")