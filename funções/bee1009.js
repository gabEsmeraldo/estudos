function bonus(SALARIO,VENDAS){
    return (SALARIO + (VENDAS * 0.15)).toFixed(2)
}

let input = require('fs').readFileSync('stdin', 'utf8')
let [nomeEmpregado,salarioSemBonus,Vendas] = input.split("\n").map(Number)
console.log(`TOTAL = R$ ${bonus(salarioSemBonus,Vendas)}`) 