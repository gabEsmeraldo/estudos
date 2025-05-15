let input = require('fs').readFileSync('stdin', 'utf8')
let lines = input.split('\n').map(Number)
let [n1,n2,media,i] = [0,0,0,0]
while (n2 == 0 && i < lines.length){
    numero = lines[i]
    if(numero >= 0 && numero <= 10 && n1 == 0){
        n1 += numero
    }else if(numero >= 0 && numero <= 10 && n2 == 0){
        n2 += numero
    }else{
        console.log("nota invalida")
    }
    i++
}
media = (n1+n2)/2
console.log(`media = ${media.toFixed(2)}`)