function argumentsLength(...arg){
    var soma = 0
    while(true){
        arg.shift()
        ++soma
        if(arg == undefined){
            break;
        }
    }
    return soma
}