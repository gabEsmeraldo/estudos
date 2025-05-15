function gatos(salary){
    let cats = (salary*0.3)/150
    return cats.toFixed(0)
}

let input = require('fs').readFileSync('stdin', 'utf8')
let lines = input.split('\n')
let nome = lines[0].trim()
let salario = Number(lines[1])
console.log(`Olá ${nome}, você pode ter ${gatos(salario)} gatos!`)