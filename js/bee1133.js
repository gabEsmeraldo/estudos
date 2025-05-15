let input = require('fs').readFileSync('stdin', 'utf8')
let [n1,n2] = input.split("\n").map(Number)
switch(true){
    case(n1<n2):
        i = n1+1
        f = n2-1
        break;
    case(n1>n2):
        i = n2+1
        f = n1-1
        break;
}
for (;i <= f; i++){
    if(i%5 == 2 || i%5 == 3){
        console.log(i)
    }
}