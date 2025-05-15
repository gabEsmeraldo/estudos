var input = require('fs').readFileSync('js/stdin', 'utf8');
var lines = input.split('\n')

const pi = 3.14159

var raio = parseFloat(lines[0])
var area = (raio*raio)*pi

console.log(`A=${area.toFixed(4)}`)