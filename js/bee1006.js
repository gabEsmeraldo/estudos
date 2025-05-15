var input = require('fs').readFileSync('js/stdin', 'utf8');
var [notaA,notaB,notaC] = input.split('\n').map(Number)
var media = ((notaA*2)+(notaB*3)+(notaC*5))/10

console.log(`MEDIA = ${media.toFixed(1)}`)