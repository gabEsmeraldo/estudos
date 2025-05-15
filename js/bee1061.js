let input = require('fs').readFileSync('stdin', 'utf8')
let lines = input.split('\n')
let diaInicio = Number(lines[0].replace("Dia ", ""))
let diaFinal = Number(lines[2].replace("Dia ", ""))
let [horasInicio,minutosInicio,segundosInicio] = lines[1].split(" : ").map(Number)
let [horasFinal,minutosFinal,segundosFinal] = lines[3].split(" : ").map(Number)
let horasTotalInicio = diaInicio*24+horasInicio+(minutosInicio/60)+(segundosInicio/(60*60))
let horasTotalFinal = diaFinal*24+horasFinal+(minutosFinal/60)+(segundosFinal/(60*60))
let duracaoTotalHoras = horasTotalFinal-horasTotalInicio

let dias = parseInt(duracaoTotalHoras/24)
let horas = parseInt(duracaoTotalHoras%24)
let minutos = parseInt(((duracaoTotalHoras%24)-horas)*60)
let segundos = parseInt(((((duracaoTotalHoras%24)-horas)*60)-minutos)*60+0.001)

console.log(`${dias} dia(s)`)
console.log(`${horas} hora(s)`)
console.log(`${minutos} minuto(s)`)
console.log(`${segundos} segundo(s)`)