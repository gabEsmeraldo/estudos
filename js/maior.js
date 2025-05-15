var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var [n1,n2] = input.split('\n').map(Number)

if (n1 == n2){
    console.log('Os números são iguais!')
} else if (n1 > n2){
    console.log('O maior é ' + n1)
} else if (n2 > n1){
    console.log('O maior é ' + n2)
}
