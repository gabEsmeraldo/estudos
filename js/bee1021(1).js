var input = require('fs').readFileSync('stdin', 'utf8');
let cedulas = [100,50,20,10,5,2]
let moedas = [1.00,0.50,0.25,0.10,0.05,0.01]
console.log("NOTAS:")
for (let i = 0; i < cedulas.length; i++) {
    console.log(`${parseInt(input/cedulas[i])} nota(s) de R$ ${cedulas[i]}.00`)
    input = input-(cedulas[i]*parseInt(input/cedulas[i]))
}
console.log("MOEDAS:")
for (i = 0; i < moedas.length; i++) {
    console.log(`${parseInt(input/moedas[i])} moeda(s) de R$ ${moedas[i].toFixed(2)}`)
    input = input - (moedas[i]*parseInt(input/moedas[i])) + 0.0001
}