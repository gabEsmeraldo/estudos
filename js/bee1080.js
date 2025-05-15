let input = require('fs').readFileSync('stdin', 'utf8')
let numeros = input.split('\n').map(Number)
let n1 = 0
let pos = 0
for (let i = 0; i<numeros.length; i++){
    if(numeros[i]>n1){
        n1 = numeros[i]
        pos = i+1
    }
}
console.log(`${n1}\n${pos}`)