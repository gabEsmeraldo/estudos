let input = require('fs').readFileSync('stdin', 'utf8')
let lines = input.split('\n').map(Number)
let i = 0
let result = 0
while (i < lines.length) {
    result += lines[i]
    i++
}
console.log(`Total: ${result}`)