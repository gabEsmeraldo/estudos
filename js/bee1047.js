var input = require('fs').readFileSync('stdin', 'utf8');
let [stHrs,stMin,endHrs,endMin] = input.split(' ').map(Number)
let horas = 0
let minutos = 0
if (stHrs == endHrs && stMin == endMin) {
    horas = 24
} else {
    if (stHrs > endHrs) {
        horas = 24 - stHrs + endHrs
    } else if (endHrs>stHrs) {
        horas = endHrs - stHrs
    }
    if (stMin > endMin) {
        minutos = 60 - stMin + endMin
        if (stHrs == endHrs) {
            horas = 24 + horas - 1
        } else {
            horas = horas - 1
        }
    } else {
        minutos = endMin - stMin
    }
}
console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)