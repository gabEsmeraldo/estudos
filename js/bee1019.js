var input = require('fs').readFileSync('js/stdin', 'utf8');
var total = Number(input)
var horas = total/3600
var minutos = (total/60) - ((parseInt(horas))*60)
var segundos = (minutos*60) - ((parseInt(minutos))*60)

console.log(`${parseInt(horas)}:${parseInt(minutos)}:${segundos.toFixed(0)}`)