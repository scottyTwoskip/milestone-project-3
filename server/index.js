const express = require('express');
const mongoose = require('mongoose'); // Import mongoose
const userRoutes = require('./routes/users');
const workoutRoutes = require('./routes/workoutRoutes');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully.'))
    .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/users', userRoutes);
app.use('/workouts', workoutRoutes);

// Default route for testing server
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Start server
const PORT = process.env.PORT || 3000;
console.log(process.env.PORT)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//for creating a new workout:
app.post('/workouts', async (req, res) => {
    try {
        // Extract user ID from request here, if applicable
        const userId = req.user._id; // Example, adjust based on your auth system

        const newWorkout = new Workout({
            ...req.body,
            owner: userId
        });

        const savedWorkout = await newWorkout.save();
        res.status(201).json(savedWorkout);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//for fetching back workouts:
app.get('/workouts', async (req, res) => {
    try {
        const workouts = await Workout.find(); // Fetch all workouts
        res.json(workouts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
//patch
app.patch('/workouts/:id', async (req, res) => {
    try {
        const updatedWorkout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedWorkout);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//workout delete: 
app.delete('/workouts/:id', async (req, res) => {
    try {
        await Workout.findByIdAndDelete(req.params.id);
        res.json({ message: 'Workout deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
//

app.use('/', userRoutes)

// User Login
app.post('/login', async (req, res) => {
    // User authentication logic
    // On success, create a token
    const token = jwt.sign({ userId: user._id }, 'your_secret_key');
    res.json({ token });
});
