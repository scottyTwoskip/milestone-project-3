const WorkoutModel = require('../models/workoutModel');

// Function to add a new workout
exports.addWorkout = async (req, res) => {
    try {
        const workout = new WorkoutModel(req.body);
        await workout.save();
        res.status(201).json(workout);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Function to retrieve all workouts
exports.getWorkouts = async (req, res) => {
    try {
        const workouts = await WorkoutModel.find({});
        res.json(workouts);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Additional functions for update and delete can be added as needed
