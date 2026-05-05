const fs = require('fs');
const path = require('path');
let file = path.join(__dirname, '..', 'users.json');

function readUsers() {
    const data = fs.readFileSync(file, 'utf8');
    return JSON.parse(data);
}

function writeUsers(users) {
    fs.writeFileSync(file, JSON.stringify(users, null, 2));
}   

module.exports = { readUsers, writeUsers };
