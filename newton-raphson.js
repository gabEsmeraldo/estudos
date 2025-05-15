let m1 = lastDigit(2410477) // Gabriel
let m2 = lastDigit(2410447) // Cid
let m3 = lastDigit(2410457) // Carlos

let newthon = (10+m1+m2+m3)/10
console.log(newthon)

function lastDigit(number){
    return number - (10 * parseInt(number / 10))
}