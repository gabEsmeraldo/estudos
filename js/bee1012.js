var input = require('fs').readFileSync('js/stdin', 'utf8');
var lines = input.split(' ');

const pi = 3.14159

var a = parseFloat(lines[0])
var b = parseFloat(lines[1])
var c = parseFloat(lines[2])

var tri = a*c/2
var cir = pi*c**2
var trap = ((a+b)*c)/2
var square = b**2
var rect = a*b

console.log("TRIANGULO: "+tri.toFixed(3))
console.log("CIRCULO: "+cir.toFixed(3))
console.log("TRAPEZIO: "+trap.toFixed(3))
console.log("QUADRADO: "+square.toFixed(3))
console.log("RETANGULO: "+rect.toFixed(3))