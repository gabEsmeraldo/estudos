let input = require('fs').readFileSync('stdin', 'utf8')
let senhas = input.split('\n').map(Number)
for (let i = 0; i<senhas.length; i++){
    if(senhas[i] !== 2002){
        console.log("Senha Invalida")
    }else{
        console.log("Acesso Permitido")
        break;
    }
}