var input = require('fs').readFileSync('js/stdin', 'utf8')
var [x,y] = input.split(' ').map(Number)
if (x === 0 && y === 0) {
  console.log('Origem')
} else {
  if (x === 0) {
    console.log('Eixo Y')
  } else if (y === 0) {
    console.log('Eixo X')
  } else if (x>0 && y>0) {
    console.log('Q1')
  } else if (x<0 && y>0) {
    console.log('Q2')
  } else if (x<0 && y<0) {
    console.log('Q3')
  } else if (x>0 && y<0) {
     console.log('Q4')
  }
}
