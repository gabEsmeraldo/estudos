var input = require('fs').readFileSync('stdin', 'utf8')
var [a,b,c] = input.split(' ').map(Number)
var triangulo = 'nenhum'
var somaAB = a+b
var somaAC = a+c
var somaBC = b+c
if (a>somaBC || b>somaAC || c>somaAB) {
  console.log('Não é um triângulo.')
} else if (a==b && b==c && a==c) {
    triangulo = 'Equilátero'
  } else if (a!==b && b!==c && a!==c) {
    triangulo = 'Escaleno'
  } else if (a==b || a==c || b==c) {
    triangulo = 'Isósceles'
  }
if (triangulo!=='nenhum') {
  console.log('Este é um triangulo ' + triangulo + '.')
}