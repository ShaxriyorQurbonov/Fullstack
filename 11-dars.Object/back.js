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




const students = [
    { id: 1, fullName: "Aliyev Sardor", group: "Frontend-21", scores: [85, 92, 78, 95, 88], attendance: 92 },
    { id: 2, fullName: "Karimova Madina", group: "Backend-22", scores: [65, 72, 58, 80, 69], attendance: 78 },
    { id: 3, fullName: "Rasulov Bekzod", group: "Frontend-21", scores: [90, 88, 84, 91, 87], attendance: 95 },
    { id: 4, fullName: "Tursunova Dilnoza", group: "Backend-22", scores: [70, 75, 68, 72, 74], attendance: 82 },
    { id: 5, fullName: "Qodirov Javohir", group: "Frontend-21", scores: [88, 90, 92, 85, 87], attendance: 89 },
    { id: 6, fullName: "Ismoilova Zarnigor", group: "Backend-22", scores: [60, 65, 63, 58, 62], attendance: 70 },
    { id: 7, fullName: "Abdullayev Diyor", group: "Frontend-21", scores: [95, 93, 97, 96, 94], attendance: 98 },
    { id: 8, fullName: "Yusupova Mohira", group: "Backend-22", scores: [78, 82, 80, 76, 79], attendance: 85 },
    { id: 9, fullName: "Rahmatov Aziz", group: "Frontend-21", scores: [55, 60, 58, 62, 57], attendance: 65 },
    { id: 10, fullName: "Saidova Nilufar", group: "Backend-22", scores: [88, 85, 90, 87, 89], attendance: 91 }
];