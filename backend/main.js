const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, 'user.json');

function addUser(user) {
    const newUser = {
        name: user.name,
        surname: user.surname,
        age: user.age
    };

    fs.readFile(usersFilePath, 'utf8', (err, data) => {
        let users = [];

        if (!err && data) {
            users = JSON.parse(data);
        }

        if (!Array.isArray(users)) {
            users = [];
        }

        users.push(newUser);

        fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (err) => {
            if (err) {
                console.error('Error writing user:', err);
                return;
            }

            console.log('User added successfully!');
        });
    });
}

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) { 
        console.error('Error reading file:', err);
        return;
    }

    console.log( data);
});

// fs.writeFile('data.txt', 'Hello, World!', (err) => {
//     if (err) {
//         console.error('Error writing file:', err);
//         return;
//     }

//     console.log('File written successfully!');
// });

// fs.appendFile('data.txt', '\nAppended text.', (err) => {
//     if (err) {
//         console.error('Error appending to file:', err);
//         return;
//     }

//     console.log('Text appended successfully!');
// }); 

addUser({ name: 'John', surname: 'Doe', age: 30 });
