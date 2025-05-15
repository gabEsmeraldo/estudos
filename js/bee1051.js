var input = require('fs').readFileSync('stdin', 'utf8');
let total = Number(input)
let taxas = 0

switch (true) {
    case (total <= 2000):
        console.log('Isento')
        break;
    case (total <= 3000 && total > 2000):
        taxas = (total-2000)*0.08
        console.log(`R$ ${taxas.toFixed(2)}`)
        break;
    case (total <= 4500 && total > 3000):
        taxas = ((total-3000)*0.18)+80
        console.log(`R$ ${taxas.toFixed(2)}`)
        break;
    case (total > 4500):
        taxas = ((total-4500)*0.28)+350
        console.log(`R$ ${taxas.toFixed(2)}`)
        break;
}

/* if (total <= 2000) {
    console.log('Isento')
} else if (total <= 3000) {
    taxas = (total-2000)*0.08
    console.log(`R$ ${taxas.toFixed(2)}`)
} else if (total <= 4500) {
    taxas = ((total-3000)*0.18)+80
    console.log(`R$ ${taxas.toFixed(2)}`)
} else if (total > 4500) {
    taxas = ((total-4500)*0.28)+350
    console.log(`R$ ${taxas.toFixed(2)}`)
} */
