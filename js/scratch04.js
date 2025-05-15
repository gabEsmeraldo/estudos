var input = require('fs').readFileSync('stdin', 'utf8')
var [nome,peso,altura] = input.split('\n')
var imc = Number(peso/(altura**2))
var categoria = 'nenhum'
if (imc<18.5){
  categoria = 'Magreza'
} else if (imc>=18.6 && imc<24.9) {
  categoria = 'Normal'
} else if (imc>=25 && imc<29.9) {
  categoria = 'Sobrepeso'
} else if (imc>=30 && imc<39.9) {
  categoria = 'Obesidade'
} else if (imc>39.9) {
  categoria = 'Obesidade Grave'
}
console.log(`${nome.trim()} está com Índice de Massa Corporal ${imc.toFixed(2)} considerado ${categoria}.`)