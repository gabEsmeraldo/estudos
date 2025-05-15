let input = require('fs').readFileSync('stdin', 'utf8');
let max = Number(input)
let i = 2
let numeros = [0,1]
while(i < max){
    numeros[i] = numeros[i-1]+numeros[i-2]
    i++
}
console.log(numeros.slice(0,max).join(" "))