var input = require('fs').readFileSync('js/stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines[0])
var b = parseInt(lines[1])
var c = parseInt(lines[2])
var d = parseInt(lines[3])

var diferenca = (a*b-c*d)

console.log("DIFERENCA = "+diferenca)