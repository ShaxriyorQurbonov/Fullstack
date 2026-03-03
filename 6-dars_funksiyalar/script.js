// Function
// function num(a, b) {
//     return (a + b) / 2;
// }
// let number = num(65, 5);
// console.log(num(5,5));
// console.log(number)

// Arrow function
// const sum = (a,b) => {
//     return a+b;
// }

// let result = sum(12,54)
// console.log(result)

// function PowerA3(a) {
//     return a ** 3;
// }

// console.log(PowerA3(3))


function Power234(x) {
    let obj = {
        yuzi: x ** 2 * Math.sqrt(3) / 4,
        perimetri: x * 3
    }
    return obj;
}

let y = Power234(6);
console.log(y);