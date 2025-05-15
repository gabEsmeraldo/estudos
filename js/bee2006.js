let input = require('fs').readFileSync('stdin', 'utf8')
let lines = input.split("\n")
let correctTea = Number(lines[0])
let tests = lines[1].split(' ').map(Number)
let corrects = 0
for (let i = 0; i < tests.length; i++){
    if (tests[i] === correctTea){
        corrects++
    }
}
console.log(corrects)