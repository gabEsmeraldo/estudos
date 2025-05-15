var input = require('fs').readFileSync('js/stdin', 'utf8');
var lines = input.split('\n');
var [cod1,und1,vlr1] = lines[0].split(' ').map(Number)
var [cod2,und2,vlr2] = lines[1].split(' ').map(Number)
var total = (und1*vlr1) + (und2*vlr2)

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)