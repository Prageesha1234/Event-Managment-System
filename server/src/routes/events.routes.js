const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const authMiddleware = require('../middlewares/auth.middleware');

// Create a new event
router.post('/', authMiddleware.verifyToken, eventController.createEvent);

// Get all events
router.get('/', authMiddleware.verifyToken, eventController.getAllEvents);

// Get a specific event by ID
router.get('/:id', authMiddleware.verifyToken, eventController.getEventById);

// Update an event by ID
router.put('/:id', authMiddleware.verifyToken, eventController.updateEvent);

// Delete an event by ID
router.delete('/:id', authMiddleware.verifyToken, eventController.deleteEvent);

module.exports = router;