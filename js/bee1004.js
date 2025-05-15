var input = require('fs').readFileSync('js/stdin', 'utf8');
var lines = input.split('\n');

var num1 = parseInt(lines[0])
var num2 = parseInt(lines[1])

var prod = num1 * num2

console.log("PROD = " + prod)