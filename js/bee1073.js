let input = require('fs').readFileSync('stdin','utf8')
let n = Number(input)
for (let i = 2; i <= n; i+=2){
    console.log(`${i}^2 = ${i**2}`)
}