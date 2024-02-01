const express = require('express');
const router = express.Router();
const { authenticateToken, requireUser } = require('../middleware/authenticate')

// Import route files
const userRoutes = require('./users');
const workoutRoutes = require('./workoutRoutes');
//authentication from middleware
router.use(authenticateToken)
// Mount routes
router.use('/users', userRoutes); // Mount user-related routes under /users
router.use('/workouts', requireUser, workoutRoutes); // Mount workout-related routes under /workouts

module.exports = router;