let input = require('fs').readFileSync('stdin', 'utf8')
let lines = input.split("\n")
let max = lines[0]
var [coelho, rato, sapo, i] = [0,0,0,1]
while (i <= max){
    var [qntd, animal] = lines[i].split(" ")
    switch (animal.trim()) {
        case 'C':
            coelho += parseInt(qntd)
            break;
        case 'R':
            rato += parseInt(qntd)
            break;
        case 'S':
            sapo += parseInt(qntd)
            break;
    }
    i++
}
let total = coelho+rato+sapo
let perCoelho = (coelho*100)/total
let perRato = (rato*100)/total
let perSapo = (sapo*100)/total
console.log(`Total: ${total} cobaias`)
console.log(`Total de coelhos: ${coelho}`)
console.log(`Total de ratos: ${rato}`)
console.log(`Total de sapos: ${sapo}`)
console.log(`Percentual de coelhos: ${perCoelho.toFixed(2)} %`)
console.log(`Percentual de ratos: ${perRato.toFixed(2)} %`)
console.log(`Percentual de sapos: ${perSapo.toFixed(2)} %`)