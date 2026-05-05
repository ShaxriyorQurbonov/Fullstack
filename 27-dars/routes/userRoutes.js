const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    getUserById,
    addNewUser,
    updateUser,
    deleteUser
} = require('../controllers/userController');

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users', addNewUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
