var input = require('fs').readFileSync('stdin', 'utf8');
let numeros = input.split('\n').map(Number);
let pares = 0
let impares = 0
let positivos = 0
let negativos = 0
for (let i = 0; i < 5; i++){
    if (numeros[i] % 2 == 0){
        pares++
    }else if(numeros[i] % 2 !== 0){
        impares++
    }
    if(numeros[i]>0){
        positivos++
    }else if(numeros[i]<0){
        negativos++
    }
}
console.log(`${pares} valor(es) par(es)\n${impares} valor(es) impar(es)\n${positivos} valor(es) positivo(s)\n${negativos} valor(es) negativo(s)`)