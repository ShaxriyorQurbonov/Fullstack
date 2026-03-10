// function greet(name,age) {
//     let result = `Salom, mening ismim ${name}, yoshim ${age}`;
//     return result;
// }
// console.log(greet("Aziz",23))


function factorial(n) {
    
    let result = 1;
    for (let i = 1; i<=n;i++){
        result *= i;
    }

    return result;
}

console.log(factorial(8))
