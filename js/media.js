var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')
var num1 = parseInt(lines[0])
var num2 = parseInt(lines[1])

var media = (num1+num2)/2

console.log("X = "+media)