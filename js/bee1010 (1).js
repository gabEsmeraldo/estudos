var input = require('fs').readFileSync('js/stdin', 'utf8');
var lines = input.split('\n');

var [codA,qntA,valueA] = lines[0].split(' ')
var [codB,qntB,valueB] = lines[1].split(' ')

var total = Number(qntA*valueA) + Number(qntB*valueB)
console.log("VALOR A PAGAR: R$ " + total.toFixed(2))