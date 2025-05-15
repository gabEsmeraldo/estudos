
let input = require('fs').readFileSync('stdin', 'utf8')
let lines = input.split("\n")
for (let i = 0; i < lines.length; i++){
    var [a,b] = lines[i].split(" ").map(Number)
    var quadrante = checkQuadrante(a,b)
    while(quadrante != 'null'){
        console.log(quadrante)
        break;
    }
}
//funções
function checkQuadrante(x,y){
    switch (true){
        case (x > 0 && y > 0):
            return 'primeiro'
        case (x < 0 && y > 0):
            return 'segundo'
        case (x < 0 && y < 0):
            return 'terceiro'
        case (x > 0 && y < 0):
            return 'quarto'
        default:
            return 'null'
    }
}