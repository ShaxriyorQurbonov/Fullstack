// // let color = ["Red", "Yelow", "Green"];
// // console.log(color);
// // console.log(color[0]);
// let nums = new Array(5);
// nums[0] = 1;
// nums[3] = 4;
// nums[4] = 5;
// console.log(nums);
// let friends = new Array("Alisa", "Bob")
// console.log(friends);
// let color = ["Red", "Yelow", "Green"];
// console.log(color);
// let copyColor = ["Black", ...color, "Blue"];
// console.log(copyColor);
// let obj = {
//     name: "Axror",
//     age: 19,
//     isMarried: false
// };
// let copyObj = { ...obj, name: capitalize("abrorbek"), isMarried: true };
// console.log(copyObj);

// function capitalize(name) {
//     let result = name.slice(0, 1).toUpperCase() + name.slice(1);
//     return result;
// }
// console.log(capitalize("abror"));
// console.log(new Set([1, 2, 34, 5, 5]));
// let setArray = [...new Set([1, 2, 3, 3, 4, 5, 5])];
// console.log(setArray);

// let numbers = Array.of(5, "gul");
// console.log(numbers);

// let number = [1, 2, 3, 4, 5, 6];
// number.push(3);
// number.pop()
// number.unshift(-1, 0);
// number.shift();
// number.splice(0, 2, "element o'chirib joylashtirdim")
// number[5] = "salom";
// console.log(number);
// console.log(number.length);
let number = [1, 2, 3, 4, 5, 6];
// let result = number.splice(0, 4);
// console.log(result);
console.log(number.concat([11, 22, 33]));
console.log(number.join(''));
let array = [1, [2, [3]]];
console.log(array.flat(2));
console.log(number.indexOf(3));
console.log(number.includes(6));

console.log(number.find(x => x > 3));
