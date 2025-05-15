var input = require('fs').readFileSync('js/stdin', 'utf8');
var lines = input.split('\n');

var hours = Number(lines.shift())
var speed = Number(lines.shift())

var liters = (hours * speed) / 12

console.log(liters.toFixed(3))