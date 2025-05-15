function createCounter(n){
    return function counter(){
        return n++
    }
}
const counter = createCounter(10)
console.log(counter())
console.log(counter())
console.log(counter())