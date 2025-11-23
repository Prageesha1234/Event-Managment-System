const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/auth.middleware');

// Get all users
router.get('/', authMiddleware.verifyToken, userController.getAllUsers);

// Get a user by ID
router.get('/:id', authMiddleware.verifyToken, userController.getUserById);

// Create a new user
router.post('/', authMiddleware.verifyToken, userController.createUser);

// Update a user by ID
router.put('/:id', authMiddleware.verifyToken, userController.updateUser);

// Delete a user by ID
router.delete('/:id', authMiddleware.verifyToken, userController.deleteUser);

module.exports = router;