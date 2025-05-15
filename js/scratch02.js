var input = require('fs').readFileSync('stdin', 'utf8')
var total = (input*1.45)*1.28
console.log(`O valor final do veiculo é de R$ ${total.toFixed(2)}`)