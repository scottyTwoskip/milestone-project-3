const WorkoutModel = require('../models/workoutModel');

// Function to add a new workout
exports.addWorkout = async (req, res) => {
    try {
        const userId = req.user.id;
        const workout = new WorkoutModel({
            ...req.body,
            owner: userId,
            date: new Date(req.body.date) // Ensure date is included in the request body
        });
        await workout.save();
        res.status(201).json(workout);
    } catch (error) {
        res.status(400).send(error.message);
    }
};


// Function to retrieve all workouts
exports.getWorkouts = async (req, res) => {
    try {
        const userId = req.user.id;
        let query = { owner: userId };
        const workouts = await WorkoutModel.find(query);
        res.json(workouts);
    } catch (error) {
        res.status(500).send(error.message);
    }
};