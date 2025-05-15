var input = require('fs').readFileSync('js/stdin', 'utf8');
var lines = input.split('\n');

var number = lines[0]
var hours = parseInt(lines[1])
var perhour = parseFloat(lines[2])

var salary = (hours*perhour)
console.log("NUMBER = "+number)
console.log(`SALARY = U$ ${salary.toFixed(2)}`)