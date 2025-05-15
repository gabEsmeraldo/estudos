let input = require('fs').readFileSync('stdin', 'utf8')
let n = input.split("\n").map(Number)
var i = 0
console.log("While:")
while (i<n.length){
  if((n[i]%2) == 0){
    console.log(`${n[i]} é par.`)
  }
  i++
}
console.log("For:")
for (let i = 0; i<n.length; i++){
  if((n[i]%2) == 0){
    console.log(`${n[i]} é par.`)
  }
}