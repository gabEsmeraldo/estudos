let input = require('fs').readFileSync('stdin', 'utf8')
let [n1,n2] = input.split(' ').map(Number)
console.log("For:")
for (let i = n1; i<=n2; i++){
  if(i%2==0){
    console.log(`${i} é par.`)
  }
}
/* console.log("While:")
while (n1<=n2){
  if((n1%2)==0){
    console.log(`${n1} é par`)
  }
  n1++
}
 */