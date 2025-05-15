let input = require('fs').readFileSync('js/stdin', 'utf8')
let [a,b] = input.split(' ').map(Number)

while (a <= b) {
    console.log(a)
    a++
}

/* for (let i = a; i <= b; i++) {
    console.log(i)
} */