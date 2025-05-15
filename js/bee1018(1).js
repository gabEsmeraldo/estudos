var input = require('fs').readFileSync('js/stdin', 'utf8');
let cedulas = [100,50,20,10,5,2,1]
console.log(input)
for (let i = 0; i < cedulas.length; i++) {
    console.log(`${parseInt(input/cedulas[i])} Notas de R$${cedulas[i]}.00`)
    input = input-(cedulas[i]*parseInt(input/cedulas[i]))
}