let input = require('fs').readFileSync('stdin', 'utf8')
let n = input.split("\n").map(Number)
let np = 0
let soma = 0
/* let i = 0
while (i<n.length){
  if(n[i]>0){
    soma += n[i]
    np++
  }
  i++
} */
for (let i = 0; i<n.length; i++){
  if(n[i]>0){
    soma += n[i]
    np++
  }
}
let media = soma/np
console.log(`${np} valores positivos\n${media.toFixed(1)}`)