let input = require('fs').readFileSync('stdin', 'utf8')
let n = Number(input)
let divisores = 0
for (let i = 1; i <= n; i ++){
    if(n % i == 0){
        divisores++
    }
}
console.log(`${n} tem ${divisores} divisores.`)