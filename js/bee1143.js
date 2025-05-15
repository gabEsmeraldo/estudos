var input = require('fs').readFileSync('stdin', 'utf8');
var max = Number(input)
for (let i = 1; i <= max; i++){
    console.log(`${i} ${i**2} ${i**3}`)
}