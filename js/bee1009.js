var input = require('fs').readFileSync('js/stdin', 'utf8');
var lines = input.split('\n');

var nome = lines[0]
var salarioBase = parseFloat(lines[1])
var bonus = parseFloat(lines[2])*0.15

var salarioFinal = (salarioBase + bonus)

console.log(`TOTAL = R$ ${salarioFinal.toFixed(2)}`)