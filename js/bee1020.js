var input = require('fs').readFileSync('js/stdin', 'utf8');
var ano = input/365
var mes = (input-((parseInt(ano))*365))/30
var dia = mes*30 - (parseInt(mes)*30)
console.log(`${parseInt(ano)} ano(s)
${parseInt(mes)} mes(es)
${dia} dia(s)`)