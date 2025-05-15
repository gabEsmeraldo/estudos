var input = require('fs').readFileSync('js/stdin', 'utf8')

if ((input>100) || (input<0)){
    console.log('Fora de intervalo')
} else if((0<=input) && (input<=25)){
    console.log('Intervalo [0,25]')
} else if ((25<input) && (input<=50)){
    console.log('Intervalo (25,50]')
} else if ((50<input) && (input<=75)){
    console.log('Intervalo (50,75]')
} else if ((75<input) && (input<=100)){
    console.log('Intervalo (75,100]')
}