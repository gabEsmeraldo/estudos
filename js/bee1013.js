var input = require('fs').readFileSync('js/stdin', 'utf8');
var lines = input.split(' ');

var numA = Number(lines.shift())
var numB = Number(lines.shift())
var numC = Number(lines.shift())

var maiorAB = (numA+numB+Math.abs(numA-numB))/2
var maiorC = (maiorAB+numC+Math.abs(maiorAB-numC))/2

console.log(maiorC + " eh o maior")