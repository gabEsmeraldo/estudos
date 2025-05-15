let input = require('fs').readFileSync('stdin', 'utf8')
let [a,b] = input.split('\n').map(Number)
let number = 0
let i = a
while (i <= b) {
    number += i
    i++
}
console.log(`Intervalo [${a},${b}]`)
console.log(`O total é ${number}`)