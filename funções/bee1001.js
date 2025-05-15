let input = require('fs').readFileSync('stdin', 'utf8');
let [n1,n2] = input.split("\n").map(Number)
soma(n1,n2)

function soma(numero1,numero2){
    return console.log(numero1 + numero2)
}
