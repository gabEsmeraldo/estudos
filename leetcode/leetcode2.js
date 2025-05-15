var createCounter = function(init){
    let presentCount = init;

    function increment() {
        return ++presentCount
    }

    function decrement() {
        return --presentCount
    }

    function reset() {
        return (presentCount = init)
    }

    return {increment, decrement, reset}
}

const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4