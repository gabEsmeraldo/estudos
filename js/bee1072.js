let input = require('fs').readFileSync('stdin', 'utf8')
let numeros = input.split('\n').map(Number)
let max = numeros[0]
let dentro = 0
let fora = 0
for (let i = 1; i <= max ;i++){
    if (numeros[i] >=10 && numeros[i] <= 20){
        dentro++
    }else{
        fora++
    }
}
console.log(`${dentro} in`)
console.log(`${fora} out`)