var input = require('fs').readFileSync('js/stdin', 'utf8');
var [cod,qnt] = input.split(' ').map(Number)
var preco = 0

switch (cod) {
    case 1:
        preco = 4.0
        break;
    case 2:
        preco = 4.5
        break;
    case 3:
        preco = 5.0
        break;
    case 4:
        preco = 2.0
        break;
    case 5:
        preco = 1.5
        break;
}

var total = preco*qnt

console.log(`Total: R$ ${total.toFixed(2)}`)