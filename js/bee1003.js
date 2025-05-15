var input = require('fs').readFileSync('stdin', 'utf8');
var [a,b] = input.split('\n').map(Number);
var soma = a + b

console.log("SOMA = " + soma)
