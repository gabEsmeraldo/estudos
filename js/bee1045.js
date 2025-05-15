var input = require('fs').readFileSync('stdin', 'utf8');
var [a,b,c] = input.split(' ').map(Number).sort((a, b) => b - a)
if (a >= b + c) {
    console.log('NAO FORMA TRIANGULO')
} else if (a**2 == (b**2 + c**2)) {
    console.log('TRIANGULO RETANGULO')
} else if (a**2 > (b**2 + c**2)) {
    console.log('TRIANGULO OBTUSANGULO')
} else if (a**2 < (b**2 + c**2)) {
    console.log('TRIANGULO ACUTANGULO')
}
if (a == b && a == c && b == c) {
    console.log('TRIANGULO EQUILATERO')
} else if (a == b && a != c && b != c) {
    console.log('TRIANGULO ISOSCELES')
} else if (a == c && a != b && c != b) {
    console.log('TRIANGULO ISOSCELES')
} else if (b == c && a != c && a != b) {
    console.log('TRIANGULO ISOSCELES')
}