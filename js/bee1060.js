let input = require('fs').readFileSync('stdin', 'utf8');
let numero = input.split('\n').map(Number)
let val = 0
for (let i = 0; i < numero.length; i++) {
    if (numero[i] > 0){
        val++
    }    
}
console.log(`${val} valores positivos`)