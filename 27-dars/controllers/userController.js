const { readUsers, writeUsers } = require('../models/userModels');

function getAllUsers(req, res) {
    try {
        let users = readUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users' });
    }
}
function getUserById(req, res) {
    try {
        let { id } = req.params;
        let users = readUsers();
        let user = users.find(u => u.id == id); 
        if (user) { 
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user' });
    }
}

function addNewUser(req, res) {
    try {
        const { name, age, email } = req.body;
        let users = readUsers();

        if (!name || age === undefined) {
            return res.status(400).json({ message: 'Name and age are required' });
        }

        let newUser = {
            id: Date.now(),
            name,
            age,
            email: email || ''
        };

        users.push(newUser);
        writeUsers(users);

        res.status(201).json({ message: 'User added successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error adding user' });
    }
}

function updateUser(req, res) {
    try {
        let { id } = req.params;
        let { name, age, email } = req.body;
        let users = readUsers();
        let userIndex = users.findIndex(u => u.id == id);

        if (userIndex === -1) {
            return res.status(404).json({ message: 'User not found' });
        }

        users[userIndex] = {
            ...users[userIndex],
            name: name ?? users[userIndex].name,
            age: age ?? users[userIndex].age,
            email: email ?? users[userIndex].email
        };

        writeUsers(users);
        res.status(200).json({ message: 'User updated successfully', user: users[userIndex] });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user' });
    }
}

function deleteUser(req, res) {
    try {
        let { id } = req.params;
        let users = readUsers();
        let userIndex = users.findIndex(u => u.id == id);

        if (userIndex === -1) {
            return res.status(404).json({ message: 'User not found' });
        }

        let deletedUser = users[userIndex];
        users.splice(userIndex, 1);
        writeUsers(users);

        res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user' });
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    addNewUser,
    updateUser,
    deleteUser
};

