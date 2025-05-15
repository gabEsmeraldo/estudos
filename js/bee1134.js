let input = require('fs').readFileSync('stdin', 'utf8')
let codigos = input.split('\n').map(Number)
let alcool = 0
let gasolina = 0
let diesel = 0
for (let i = 0; codigos[i] !== 4 ; i++){
    if(codigos[i] == 1,2,3){
        switch (codigos[i]){
            case 1:
                alcool++
                break;
            case 2:
                gasolina++
                break;
            case 3:
                diesel++
                break;
        }
    }
}
console.log("MUITO OBRIGADO")
console.log(`Alcool: ${alcool}\nGasolina: ${gasolina}\nDiesel: ${diesel}`)