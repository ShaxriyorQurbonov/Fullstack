// let array = ["salom", 234, true, {
//     name: "Abror"
// }]

// let Talaba = {
//     name: "Farhod",
//     suename: "Fozilov",
//     age: 23
// }

// let mevalar = ["nok", "olma", "anor", "behi",]

// for (const i of mevalar) {
//     console.log(i);
// }

// let data = [
//     {
//         name: "Axror",
//         surname: "Azizov",
//         age: 24,
//         isMarried: false
//     },

//     {
//         name: "Axror",
//         surname: "Azizov",
//         age: 24,
//         isMarried: false
//     },

//     {
//         name: "Axror",
//         surname: "Azizov",
//         age: 24,
//         isMarried: false
//     },
// ]

// // String methodlar

// let text = "Javascript";
// console.log(text.length);
// console.log([0]);

// let str = "Salom Dunyo";
// console.log(str.indexOf("Dunyo"));
// console.log(str.lastIndexOf("n"));
// console.log(str.includes("Sal"));




function found(str, search) {
    for (let i = 0; i <= str.length - search.length; i++) {
        let tekshir = true; 

        for (let j = 0; j < search.length; j++) {
            if (str[i + j] !== search[j]) {
                tekshir = false;  
                break;
            }
        }

        if (tekshir) return i;
    }

    return -1;
}

console.log(found("hello world", "hello"));


