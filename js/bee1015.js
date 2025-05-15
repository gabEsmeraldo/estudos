var input = require('fs').readFileSync('js/stdin', 'utf8');
var lines = input.split('\n');

var p1 = lines[0].split(' ')
var p2 = lines[1].split(' ')


var x1 = parseFloat(p1[0])
var y1 = parseFloat(p1[1])

var x2 = parseFloat(p2[0])
var y2 = parseFloat(p2[1])

var distance = Math.sqrt(((x2-x1)**2) + ((y2-y1)**2))

console.log(distance.toFixed(4))

var x1 = parseFloat(lines[0].split(' '))