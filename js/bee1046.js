var input = require('fs').readFileSync('stdin', 'utf8');
var [start,finish] = input.split(' ').map(Number)
var total = 0
if (start>=finish){
    var day1 = 24-start
    total = day1+finish
    console.log('O JOGO DUROU ' + total + ' HORA(S)')
} else {
    total = finish-start
    console.log('O JOGO DUROU ' + total + ' HORA(S)')
}