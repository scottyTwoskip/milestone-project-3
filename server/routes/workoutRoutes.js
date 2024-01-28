const express = require('express');
const workoutController = require('../controllers/workoutController');
const router = express.Router();

// Route for adding a new workout
router.post('/', workoutController.addWorkout);

// Route for retrieving all workouts
router.get('/', workoutController.getWorkouts);

// Additional routes for update and delete can be added as needed

module.exports = router;
