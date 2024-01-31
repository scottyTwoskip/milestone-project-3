const express = require('express');
const router = express.Router();

// Import route files
const userRoutes = require('./users');
const workoutRoutes = require('./workoutRoutes');

// Mount routes
router.use('/users', userRoutes); // Mount user-related routes under /users
router.use('/workouts', workoutRoutes); // Mount workout-related routes under /workouts

module.exports = router;
