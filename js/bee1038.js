var input = require('fs').readFileSync('js/stdin', 'utf8');

var [cod,qnt] = input.split(' ').map(Number)
var [CQuente,XSalada,XBacon,TSimples,Refrigerante] = [4*qnt,4.5*qnt,]
var CQuente = 4*qnt
var XSalada = 4.5*qnt
var XBacon = 5*qnt
var TSimples = 2*qnt
var Refrigerante = 1.5*qnt

if(cod === 1) {
    console.log('Total: R$ ' + CQuente.toFixed(2))
} else if(cod === 2) {
    console.log('Total: R$ ' + XSalada.toFixed(2))
} else if(cod === 3) {
    console.log('Total: R$ ' + XBacon.toFixed(2))
} else if(cod === 4) {
    console.log('Total: R$ ' + TSimples.toFixed(2))
} else if(cod === 5) {
    console.log('Total: R$ ' + Refrigerante.toFixed(2))
}