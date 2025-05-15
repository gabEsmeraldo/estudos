let input = require('fs').readFileSync('stdin', 'utf8')
let numeros = input.split('\n').map(Number)
for (let i = 0; i<numeros.length; i++){
    let primo = 0
    for(let n = 0; n<=numeros[i];n++){
        if(numeros[i] % n == 0){
            primo++
        }
    }
    if(primo == 2){
        console.log(`${numeros[i]} é primo`)
    }
}