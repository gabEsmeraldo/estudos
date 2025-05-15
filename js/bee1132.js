let input = require('fs').readFileSync('stdin', 'utf8')
let [n1,n2] = input.split("\n").map(Number)
let [i,f,soma] = [0,0,0]
switch(true){
    case(n1<n2):
        i = n1
        f = n2
        break;
    case(n1>n2):
        i = n2
        f = n1
        break;
}
while(i<=f){
    if(i % 13 !== 0){
        soma+=i
    }
    i++
}
console.log(soma)