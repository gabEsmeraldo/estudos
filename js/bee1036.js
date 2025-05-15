var input = require('fs').readFileSync('js/stdin', 'utf8')

var [a,b,c] = input.split(' ').map(Number)
var delta = ((b**2)-4*a*c)
var Rdelta = Math.sqrt(delta)
var r1 = (-b+Rdelta)/(2*a)
var r2 = (-b-Rdelta)/(2*a)

if ((a === 0) || (delta < 0)){
    console.log('Impossivel calcular')
} else {
    console.log("R1 = " + r1.toFixed(5))
    console.log("R2 = " + r2.toFixed(5))
}