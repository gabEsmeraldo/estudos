var input = require('fs').readFileSync('js/stdin', 'utf8');
var total = Number(input)

var notas100 = (parseInt(total/100))
var total = total-(notas100*100)

var notas50 = (parseInt(total/50))
var total = total-(notas50*50)

var notas20 = (parseInt(total/20))
var total = total-(notas20*20)

var notas10 = (parseInt(total/10))
var total = total-(notas10*10)

var notas05 = parseInt((total/5))
var total = total-(notas05*5)

var notas02 = parseInt((total/2))
var total = total-(notas02*2)

var notas01 = parseInt((total))

console.log(input)
console.log(`${notas100} nota(s) de R$ 100,00\n${notas50} nota(s) de R$ 50,00\n${notas20} nota(s) de R$ 20,00\n${notas10} nota(s) de R$ 10,00\n${notas05} nota(s) de R$ 5,00\n${notas02} nota(s) de R$ 2,00\n${notas01} nota(s) de R$ 1,00`)