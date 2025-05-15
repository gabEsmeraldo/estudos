let input = require('fs').readFileSync('stdin', 'utf8');
let ddd = Number(input)
let estado = 'DDD nao cadastrado'
switch (ddd) {
    case 11:
        estado = 'Sao Paulo'
        break;
    case 19:
        estado = 'Campinas'
        break;
    case 21:
        estado = 'Rio de Janeiro'
        break;
    case 27:
        estado = 'Vitoria'
        break;
    case 31:
        estado = 'Belo Horizonte'
        break;
    case 32:
        estado = 'Juiz de Fora'
        break;
    case 61:
        estado = 'Brasilia'
        break;
    case 71:
        estado = 'Salvador'
        break;
    case 85:
        estado = 'Fortaleza'
        break;
}
console.log(estado)