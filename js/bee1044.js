var input = require('fs').readFileSync('stdin', 'utf8')
var [n1,n2] = input.split(' ').map(Number)

if (n2>n1){
var m1 = n2/n1
var m2 = parseInt(m1)
if (m1 === m2) {
    console.log('Sao Multiplos')
} else {
    console.log('Nao sao Multiplos')
}
} else if (n1>n2){
    var m1 = n1/n2
var m2 = parseInt(m1)
if (m1 === m2) {
    console.log('Sao Multiplos')
} else {
    console.log('Nao sao Multiplos')
}
}