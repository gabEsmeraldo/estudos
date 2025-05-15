let input = require('fs').readFileSync('stdin', 'utf8');
let [a1,b1,c1] = input.split(' ')
let [a,b,c] = [a1,b1,c1].sort((a,b) => a-b)
/* console.log(`${a}
${b}
${c}
`)
console.log(`${a1}
${b1}
${c1.trim()}`) */
console.log(a.trim())
console.log(b.trim())
console.log(`${c.trim()}\n`)
console.log(a1.trim())
console.log(b1.trim())
console.log(c1.trim())