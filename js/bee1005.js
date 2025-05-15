var input = require('fs').readFileSync('js/stdin', 'utf8');
var lines = input.split('\n');

var a = lines[0]*3.5
var b = lines[1]*7.5

var media = (a+b)/11

console.log("MEDIA = " + media.toFixed(5))