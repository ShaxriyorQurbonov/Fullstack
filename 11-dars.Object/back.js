// function finalResult(array) {
//     let totalprize = 0;
//     let discount = 0;

//     for (const i of array) {
//         totalprize += i;
//     }

//     if (array.length >=3 && array.length <= 5) {
//         discount = 10;
//     } else if (array.length > 5) {
//         discount = 20;
//     }
//     return{
//         totalprize: totalprize,
//         discount: discount,
//         finalprize: totalprize - (totalprize * discount / 100)
//     }
// }

// console.log(finalResult([100, 200, 300]));
// console.log(finalResult([100, 200, 300, 400]));
// console.log(finalResult([100, 200, 300, 400, 500, 600]));

// console.log('=================================');


// function withdraw(amount) {
//     let kupyuros = [100, 50, 20, 10];
//     let result = [];

//     if (amount % 10 !== 0) {
//         return "Amount must be a multiple of 10";
//     }

//     for (const kupyuro of kupyuros) {
//         let count = Math.floor(amount / kupyuro);
//         if (count > 0) {
//             result.push(`${count} x ${kupyuro}`);
//             amount -= count * kupyuro;
//         }
//     }
//     return result;
// }

// console.log(withdraw(380));
// console.log(withdraw(125)); 
// console.log(withdraw(500)); 

// console.log('=================================');