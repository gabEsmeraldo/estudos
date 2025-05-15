var input = require('fs').readFileSync('js/stdin', 'utf8');
const pi = 3.14159
var raio = parseInt(input)
var vol = (4.0/3)*pi*raio**3

console.log("VOLUME = " + vol.toFixed(3))