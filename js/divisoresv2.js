let input = require('fs').readFileSync('stdin', 'utf8')
let n = Number(input)
let divisores = [0]
let index = 0
for (let i = 1; i <= n; i ++){
    if(n % i == 0){
        divisores[index] = i
        index++
    }
}
console.log(`${n} tem ${divisores} como divisores.`)