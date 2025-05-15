var input = require('fs').readFileSync('js/stdin', 'utf8');
var total = Number(input)
if (total<0){
    total = 0
}
var notas100 = total/100
var qnt100 = parseInt(notas100)
var sobra100 = total-(qnt100*100)

var notas50 = sobra100/50
var qnt50 = parseInt(notas50)
var sobra50 = sobra100-(qnt50*50)

var notas20 = sobra50/20
var qnt20 = parseInt(notas20)
var sobra20 = sobra50-(qnt20*20)

var notas10 = sobra20/10
var qnt10 = parseInt(notas10)
var sobra10 = sobra20-(qnt10*10)

var notas05 = sobra10/5
var qnt05 = parseInt(notas05)
var sobra05 = sobra10-(qnt05*5)

var notas02 = sobra05/2
var qnt02 = parseInt(notas02)
var sobra02 = sobra05-(qnt02*2)

var moedas01 = parseInt(sobra02)
var sobra01 = sobra02-moedas01

var cent50 = sobra01/0.5
var qntcent50 = parseInt(cent50)
var sobracent50 = sobra01-(qntcent50*0.5)

var cent25 = sobracent50/0.25
var qntcent25 = parseInt(cent25)
var sobracent25 = sobracent50-(qntcent25*0.25)

var cent10 = sobracent25/0.10
var qntcent10 = parseInt(cent10)
var sobracent10 = sobracent25-(qntcent10*0.10)

var cent05 = sobracent10/0.05
var qntcent05 = parseInt(cent05)
var sobracent05 = sobracent10-(qntcent05*0.05)

var qntcent01 = parseInt((sobracent05*100)+0.0001)

console.log(`NOTAS:`)
console.log(`${qnt100} nota(s) de R$ 100.00`)
console.log(`${qnt50} nota(s) de R$ 50.00`)
console.log(`${qnt20} nota(s) de R$ 20.00`)
console.log(`${qnt10} nota(s) de R$ 10.00`)
console.log(`${qnt05} nota(s) de R$ 5.00`)
console.log(`${qnt02} nota(s) de R$ 2.00`)
console.log(`MOEDAS:`)
console.log(`${moedas01} moeda(s) de R$ 1.00`)
console.log(`${qntcent50} moeda(s) de R$ 0.50`)
console.log(`${qntcent25} moeda(s) de R$ 0.25`)
console.log(`${qntcent10} moeda(s) de R$ 0.10`)
console.log(`${qntcent05} moeda(s) de R$ 0.05`)
console.log(`${qntcent01} moeda(s) de R$ 0.01`)