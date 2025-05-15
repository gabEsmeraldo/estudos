var input = require('fs').readFileSync('js/stdin', 'utf8');

var [a,b,c,d] = input.split(' ').map(Number)
var somaAB = a+b
var somaCD = c+d

if (b>c && d>a && somaCD>somaAB && c>0 && d>0 && a % 2 === 0){
    console.log('Valores aceitos')
} else{
    console.log('Valores nao aceitos')
}