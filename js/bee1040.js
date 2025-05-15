var input = require('fs').readFileSync('js/stdin', 'utf8');
var lines = input.split('\n')
var [n1,n2,n3,n4] = lines[0].split(' ').map(Number)
var exame = Number(lines[1])
var media = ((n1*2)+(n2*3)+(n3*4)+(n4))/10
var mediaFinal = (media+exame)/2

if(media<5){
    console.log('Media: ' + media.toFixed(1))
    console.log('Aluno reprovado.')
}else if(media>7){
    console.log('Media: ' + media.toFixed(1))
    console.log('Aluno aprovado.')
}else if((media>=5) && (media<7)){
    if(exame<5){
        console.log('Media: ' + media.toFixed(1))
        console.log('Aluno em exame.')
        console.log('Nota do exame: ' + exame.toFixed(1))
        console.log('Aluno reprovado.')
        console.log('Media final: ' + mediaFinal.toFixed(1))
    }else if(exame>=5){
        console.log('Media: ' + media.toFixed(1))
        console.log('Aluno em exame.')
        console.log('Nota do exame: ' + exame.toFixed(1))
        console.log('Aluno aprovado.')
        console.log('Media final: ' +mediaFinal.toFixed(1))
    }
}